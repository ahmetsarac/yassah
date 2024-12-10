import WORDS from "../util/words.js";
import assignTeams from "../util/assign_teams.js";
import GameState from "../util/game_state.js";
import db from "../util/db.js";

const socketController = (io) => {
  io.on("connection", (socket) => {
    
    console.log(`[INFO] WebSocket connection established: ${socket.id}`);

    socket.on("disconnect", async (reason) => {
      if (reason === "io server disconnect") {
        socket.connect();
      }
      const lobby_id = socket.handshake.query.lobbyId;
      const roomObj = io.sockets.adapter.rooms.get(lobby_id);
      socket.leave(lobby_id);
      const sockets = await io.in(lobby_id).fetchSockets();
      if (sockets.length == 0) {
        await db.collection("lobbies").deleteOne({ id: lobby_id });
        return;
      }
      const players = {};
      assignTeams(players, sockets);
      roomObj.players = players;
      io.to(lobby_id).emit("new_player", roomObj.players);
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
      roomObj.game_state = GameState.IDLE;
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

    socket.on("ready_to_play", (lobby_id) => {
      const roomObj = io.sockets.adapter.rooms.get(lobby_id);
      roomObj.speaker_count++;
      let time = roomObj.time;
      io.to(lobby_id).volatile.emit("counter_start", time--);
      roomObj.game_state = GameState.STARTED;
      roomObj.current_word = WORDS[Math.floor(Math.random() * WORDS.length)];
      io.to(lobby_id).emit(
        "ready_to_play_change",
        roomObj.game_state,
        roomObj.current_word
      );
      var countdown = setInterval(function () {
        io.to(lobby_id).volatile.emit("counter_start", time--);
        if (time === -1) {
          clearInterval(countdown);
          timerZero(roomObj);
          io.to(lobby_id).emit(
            "counter_finish",
            roomObj.game_state,
            roomObj.winner_team,
            roomObj.current_speaker,
            roomObj.current_observer
          );
        }
      }, 1000);
    });

    socket.on("game_start", (lobby_id, initial_pass, round, time) => {
      let roomObj = io.sockets.adapter.rooms.get(lobby_id);
      roomObj.blue_team_score = 0;
      roomObj.red_team_score = 0;
      roomObj.initial_pass = initial_pass;
      roomObj.blue_team_pass = initial_pass;
      roomObj.red_team_pass = initial_pass;
      roomObj.round = round;
      roomObj.current_word = WORDS[Math.floor(Math.random() * WORDS.length)];
      roomObj.current_team = "BLUE";
      roomObj.current_speaker_index = 0;
      roomObj.current_observer_index = 0;
      roomObj.speaker_count = 0;
      roomObj.time = time;
      roomObj.current_speaker = roomObj.players.blue_team[0];
      roomObj.current_observer = roomObj.players.red_team[0];
      roomObj.game_state = GameState.READY;

      if (
        roomObj.players.blue_team.length < 2 &&
        roomObj.players.red_team.length < 2
      ) {
        roomObj.game_state = GameState.ERROR;
        io.to(lobby_id).emit(
          "game_start_error_not_enough_player",
          roomObj.game_state,
          "Takimlarda yeterince oyuncu yok."
        );
      } else {
        io.to(lobby_id).emit("game_start_object", roomObj);
      }
    });

    socket.on("correct_button_pressed", (lobby_id, team) => {
      let roomObj = io.sockets.adapter.rooms.get(lobby_id);
      roomObj.current_word = WORDS[Math.floor(Math.random() * WORDS.length)];

      if (team == "BLUE") {
        roomObj.blue_team_score++;
      } else {
        roomObj.red_team_score++;
      }
      io.to(lobby_id).emit(
        "team_score_up",
        roomObj.blue_team_score,
        roomObj.red_team_score,
        roomObj.current_word
      );
    });

    socket.on("pass_button_pressed", (lobby_id, team) => {
      let roomObj = io.sockets.adapter.rooms.get(lobby_id);
      roomObj.current_word = WORDS[Math.floor(Math.random() * WORDS.length)];

      if (team == "BLUE") {
        roomObj.blue_team_pass--;
      } else {
        roomObj.red_team_pass--;
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
        roomObj.blue_team_score--;
      } else {
        roomObj.red_team_score--;
      }
      io.to(lobby_id).emit(
        "team_yassah",
        roomObj.blue_team_score,
        roomObj.red_team_score,
        roomObj.current_word
      );
    });
  });
};

const timerZero = (roomObj) => {
  roomObj.game_state = GameState.READY;
  if (roomObj.speaker_count % 2 == 0) {
    roomObj.current_speaker_index++;
  }
  if (
    roomObj.speaker_count %
      (roomObj.players.blue_team.length + roomObj.players.red_team.length) ==
    0
  ) {
    roomObj.round--;
  }
  if (roomObj.round == 0) {
    roomObj.game_state = GameState.OVER;
    let winner_team;
    if (roomObj.blue_team_score > roomObj.red_team_score) {
      winner_team = "BLUE";
    } else if (roomObj.blue_team_score < roomObj.red_team_score) {
      winner_team = "RED";
    } else {
      winner_team = "DRAW";
    }
    roomObj.winner_team = winner_team;
  }
  roomObj.current_team = roomObj.current_team == "BLUE" ? "RED" : "BLUE";
  roomObj.current_speaker =
    roomObj.current_team == "BLUE"
      ? roomObj.players.blue_team[
          roomObj.current_speaker_index % roomObj.players.blue_team.length
        ]
      : roomObj.players.red_team[
          roomObj.current_speaker_index % roomObj.players.red_team.length
        ];
  roomObj.current_observer =
    roomObj.current_team == "BLUE"
      ? roomObj.players.red_team[
          roomObj.current_speaker_index % roomObj.players.red_team.length
        ]
      : roomObj.players.blue_team[
          roomObj.current_speaker_index % roomObj.players.blue_team.length
        ];
  roomObj.blue_team_pass = roomObj.initial_pass;
  roomObj.red_team_pass = roomObj.initial_pass;
};

export default socketController;
