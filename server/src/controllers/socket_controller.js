const socketController = (io) => {
  io.on("connection", (socket) => {
    socket.on("joinRoom", (lobbyId, username) => {
      console.log("join Room: ", lobbyId, username);
      socket.join(lobbyId);
      const sockets = Array.from(io.sockets.adapter.rooms.get(lobbyId));
      for (var player of sockets) {
        console.log("player : ", player);
      }
      const players = Array.from(io.sockets.adapter.rooms.get(lobbyId));
      io.to(lobbyId).emit("new_player", players);
    });
  });
};

export default socketController;
