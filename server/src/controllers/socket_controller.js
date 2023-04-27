const socketController = (io) => {
  io.on("connection", (socket) => {
    socket.on("joinRoom", async (lobbyId, username) => {
      console.log("join Room: ", lobbyId, username);
      socket.join(lobbyId);
      socket.username = username;
      const sockets = await io.in(lobbyId).fetchSockets();
      const players = [];
      for (var player of sockets) {
        players.push(player.username);
      }
      io.to(lobbyId).emit("new_player", players);
    });
  });
};

export default socketController;
