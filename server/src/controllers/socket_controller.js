const socketController = (io) => {
  io.on("connection", (socket) => {
    socket.on("disconnect", async (reason) => {
      const lobbyId = socket.handshake.query.lobbyId;
      socket.leave(lobbyId);
      const sockets = await io.in(lobbyId).fetchSockets();
      const players = {};
      assignTeams(players, sockets);
      io.to(lobbyId).emit(
        "new_player",
        players.all,
        players.players_of_blue,
        players.players_of_red
      );
    });

    socket.on("join_room", async (lobbyId, username) => {
      socket.join(lobbyId);
      socket.username = username;
      const sockets = await io.in(lobbyId).fetchSockets();
      const players = {};
      assignTeams(players, sockets);
      io.to(lobbyId).emit(
        "new_player",
        players.all,
        players.players_of_blue,
        players.players_of_red
      );
    });

    socket.on("join_blue", async (lobbyId) => {
      socket.team = "BLUE";
      const sockets = await io.in(lobbyId).fetchSockets();
      const players = {};
      assignTeams(players, sockets);
      io.to(lobbyId).emit(
        "new_player_in_blue",
        players.all,
        players.players_of_blue,
        players.players_of_red
      );
    });

    socket.on("join_red", async (lobbyId) => {
      socket.team = "RED";
      const sockets = await io.in(lobbyId).fetchSockets();
      const players = {};
      assignTeams(players, sockets);
      io.to(lobbyId).emit(
        "new_player_in_red",
        players.all,
        players.players_of_blue,
        players.players_of_red
      );
    });
  });
};

const assignTeams = (players, sockets) => {
  const all_players = [];
  const players_of_blue = [];
  const players_of_red = [];
  for (var player of sockets) {
    const playerObj = { username: player.username, team: player.team };
    all_players.push(playerObj);
    if (player.team == "BLUE") players_of_blue.push(player.username);
    if (player.team == "RED") players_of_red.push(player.username);
  }
  players.all = all_players;
  players.players_of_blue = players_of_blue;
  players.players_of_red = players_of_red;
};

export default socketController;
