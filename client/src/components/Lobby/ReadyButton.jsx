const ReadyButton = ({ socket, lobbyId }) => {
  const handleClick = (event) => {
    socket.emit("ready_to_play", lobbyId);
  };

  return (
    <div className="ready">
      <p>anlatmaya hazır mısın?</p>
      <button onClick={handleClick}>hazırım</button>
    </div>
  );
};

export default ReadyButton;
