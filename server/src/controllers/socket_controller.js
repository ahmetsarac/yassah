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
      io.to(lobbyId).emit("new_player", players);
    });

    socket.on("join_blue", async (lobbyId) => {
      socket.team = "BLUE";
      const sockets = await io.in(lobbyId).fetchSockets();
      const players = {};
      assignTeams(players, sockets);
      io.to(lobbyId).emit("new_player_in_blue", players);
    });

    socket.on("join_red", async (lobbyId) => {
      socket.team = "RED";
      const sockets = await io.in(lobbyId).fetchSockets();
      const players = {};
      assignTeams(players, sockets);
      io.to(lobbyId).emit("new_player_in_red", players);
    });

    socket.on("game_start", async (lobbyId, count) => {
      console.log("game has started", count);
      var countdown = setInterval(function () {
        io.to(lobbyId).volatile.emit("counter_start", count);
        count--;
        if (count === -1) {
          clearInterval(countdown);
        }
      }, 1000);
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
