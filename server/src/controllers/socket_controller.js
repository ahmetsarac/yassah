import WORDS from "../util/words.js";

const socketController = (io) => {
  io.on("connection", (socket) => {
    socket.on("disconnect", async (reason) => {
      const lobbyId = socket.handshake.query.lobbyId;
      socket.leave(lobbyId);
      const sockets = await io.in(lobbyId).fetchSockets();
      const players = {};
      assignTeams(players, sockets);
      io.to(lobbyId).emit("new_player", players);
    });

    socket.on("join_room", async (lobbyId, username, isLeader) => {
      socket.username = username;
      socket.team = "WAITING";
      socket.isLeader = isLeader;
      socket.join(lobbyId);
      const sockets = await io.in(lobbyId).fetchSockets();
      const players = {};
      assignTeams(players, sockets);
      io.to(lobbyId).emit("new_player", players, socket.id);
    });

    socket.on("join_blue", async (lobbyId) => {
      socket.team = "BLUE";
      const sockets = await io.in(lobbyId).fetchSockets();
      const players = {};
      assignTeams(players, sockets);
      io.to(lobbyId).emit("new_player_in_blue", players, socket.id);
    });

    socket.on("join_red", async (lobbyId) => {
      socket.team = "RED";
      const sockets = await io.in(lobbyId).fetchSockets();
      const players = {};
      assignTeams(players, sockets);
      io.to(lobbyId).emit("new_player_in_red", players, socket.id);
    });

    socket.on("game_start", async (lobbyId, count) => {
      let roomObj = io.sockets.adapter.rooms.get(lobbyId);
      roomObj.blue_team_score = 0;
      roomObj.red_team_score = 0;
      roomObj.current_word = WORDS[0];
      console.log("game has started", count);
      console.log(roomObj.current_word);
      io.to(lobbyId).emit("game_start_word", roomObj.current_word);
      var countdown = setInterval(function () {
        io.to(lobbyId).volatile.emit("counter_start", count);
        count--;
        if (count === -1) {
          clearInterval(countdown);
        }
      }, 1000);
    });

    socket.on("correct_button_pressed", (lobbyId, team) => {
      let roomObj = io.sockets.adapter.rooms.get(lobbyId);
      roomObj.current_word = WORDS[Math.floor(Math.random() * (WORDS.length - 1 - 0 + 1) + 0)];

      if (team == "BLUE") {
        roomObj.blue_team_score += 1;
      } else {
        roomObj.red_team_score += 1;
      }
      io.to(lobbyId).emit(
        "team_score_up",
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
  let leaderId;
  for (var player of sockets) {
    const playerObj = {
      id: player.id,
      username: player.username,
      team: player.team,
    };
    if (player.team == "WAITING") waiting_players.push(playerObj);
    if (player.team == "BLUE") players_of_blue.push(playerObj);
    if (player.team == "RED") players_of_red.push(playerObj);
    if (player.isLeader) leaderId = player.id;
  }
  players.leaderId = leaderId;
  players.waiting = waiting_players;
  players.blue_team = players_of_blue;
  players.red_team = players_of_red;
};


export default socketController;
