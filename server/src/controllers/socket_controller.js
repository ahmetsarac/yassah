const socketController = (io) => {
  io.on("connection", (socket) => {
    const { lobbyId } = socket.handshake.query;
    socket.join(lobbyId);
    console.log(lobbyId);
    const players = Array.from(io.sockets.adapter.rooms.get(lobbyId));
    io.to(lobbyId).emit("new_player", players);
  });
};

export default socketController;
