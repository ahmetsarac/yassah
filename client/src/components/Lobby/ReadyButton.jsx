const ReadyButton = ({ socket, lobbyId }) => {
  const handleClick = (event) => {
    socket.emit("ready_to_play", lobbyId);
  };

  return (
    <div className="ready">
      <p>Anlatmaya hazir misin?</p>
      <button onClick={handleClick}>Hazirim</button>
    </div>
  );
};

export default ReadyButton;
