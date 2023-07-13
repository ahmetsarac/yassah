const StartButton = ({ socket, leaderId, lobbyId }) => {
  const handleClick = (event) => {
    //event.preventDefault();
    socket.emit("game_start", lobbyId, 10);
  };

  if (socket && socket.id == leaderId) {
    return <button onClick={handleClick}>Baslat</button>;
  } else {
    return <></>;
  }
};

export default StartButton;
