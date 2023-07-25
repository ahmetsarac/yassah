import WORDS from "../util/words.js";

const socketController = (io) => {
  io.on("connection", (socket) => {
    socket.on("disconnect", async (reason) => {
      const lobby_id = socket.handshake.query.lobbyId;
      socket.leave(lobby_id);
      const sockets = await io.in(lobby_id).fetchSockets();
      const players = {};
      assignTeams(players, sockets);
      io.to(lobby_id).emit("new_player", players);
    });

    socket.on("join_room", async (lobby_id, username, is_leader) => {
      socket.username = username;
      socket.team = "WAITING";
      socket.is_leader = is_leader;
      socket.join(lobby_id);
      const sockets = await io.in(lobby_id).fetchSockets();
      const players = {};
      assignTeams(players, sockets);
      const roomObj = io.sockets.adapter.rooms.get(lobby_id);
      roomObj.players = players;
      io.to(lobby_id).emit("new_player", roomObj.players, socket.id);
    });

    socket.on("join_blue", async (lobby_id) => {
      socket.team = "BLUE";
      const sockets = await io.in(lobby_id).fetchSockets();
      const players = {};
      assignTeams(players, sockets);
      const roomObj = io.sockets.adapter.rooms.get(lobby_id);
      roomObj.players = players;
      io.to(lobby_id).emit("new_player_in_blue", roomObj.players, socket.id);
    });

    socket.on("join_red", async (lobby_id) => {
      socket.team = "RED";
      const sockets = await io.in(lobby_id).fetchSockets();
      const players = {};
      assignTeams(players, sockets);
      const roomObj = io.sockets.adapter.rooms.get(lobby_id);
      roomObj.players = players;
      io.to(lobby_id).emit("new_player_in_red", roomObj.players, socket.id);
    });

    socket.on("game_start", async (lobby_id, initial_pass, round, time) => {
      let roomObj = io.sockets.adapter.rooms.get(lobby_id);
      roomObj.blue_team_score = 0;
      roomObj.red_team_score = 0;
      roomObj.blue_team_pass = initial_pass;
      roomObj.red_team_pass = initial_pass;
      roomObj.round = round;
      roomObj.current_word = WORDS[0];
      roomObj.current_speaker = { id: socket.id, team: socket.team };
      roomObj.current_observer = roomObj.players.red_team[0];
      console.log(roomObj);

      io.to(lobby_id).emit("game_start_object", roomObj);
      var countdown = setInterval(function () {
        io.to(lobby_id).volatile.emit("counter_start", time);
        time--;
        if (time === -1) {
          clearInterval(countdown);
        }
      }, 1000);
    });

    socket.on("correct_button_pressed", (lobby_id, team) => {
      let currentRoom = socket.rooms.values();
      console.log(currentRoom);
      let roomObj = io.sockets.adapter.rooms.get(lobby_id);
      roomObj.current_word = WORDS[Math.floor(Math.random() * WORDS.length)];

      if (team == "BLUE") {
        roomObj.blue_team_score += 1;
      } else {
        roomObj.red_team_score += 1;
      }
      io.to(lobby_id).emit(
        "team_score_up",
        roomObj.blue_team_score,
        roomObj.red_team_score,
        roomObj.current_word
      );
      console.log("blue team score: ", roomObj.blue_team_score);
      console.log("red team score: ", roomObj.red_team_score);
    });

    socket.on("pass_button_pressed", (lobby_id, team) => {
      let roomObj = io.sockets.adapter.rooms.get(lobby_id);
      roomObj.current_word = WORDS[Math.floor(Math.random() * WORDS.length)];

      if (team == "BLUE") {
        roomObj.blue_team_pass -= 1;
      } else {
        roomObj.red_team_pass -= 1;
      }
      io.to(lobby_id).emit(
        "team_pass",
        roomObj.blue_team_pass,
        roomObj.red_team_pass,
        roomObj.current_word
      );
    });

    socket.on("yassah_button_pressed", (lobby_id, team) => {
      let roomObj = io.sockets.adapter.rooms.get(lobby_id);
      roomObj.current_word = WORDS[Math.floor(Math.random() * WORDS.length)];

      if (team == "BLUE") {
        roomObj.blue_team_score -= 1;
      } else {
        roomObj.red_team_score -= 1;
      }
      io.to(lobby_id).emit(
        "team_yassah",
        roomObj.blue_team_score,
        roomObj.red_team_score,
        roomObj.current_word
      );
      console.log("blue team score: ", roomObj.blue_team_score);
      console.log("red team score: ", roomObj.red_team_score);
    });
  });
};

const assignTeams = (players, sockets) => {
  const waiting_players = [];
  const players_of_blue = [];
  const players_of_red = [];
  let leader;
  for (var player of sockets) {
    const playerObj = {
      id: player.id,
      username: player.username,
      team: player.team,
    };
    if (player.team == "WAITING") waiting_players.push(playerObj);
    if (player.team == "BLUE") players_of_blue.push(playerObj);
    if (player.team == "RED") players_of_red.push(playerObj);
    if (player.is_leader) leader = playerObj;
  }
  players.leader = leader;
  players.waiting = waiting_players;
  players.blue_team = players_of_blue;
  players.red_team = players_of_red;
};

export default socketController;
