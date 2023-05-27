const StartButton = ({ socketParam, leaderId, lobbyId }) => {
  const handleClick = (event) => {
    console.log("butotn itkadf");
    //event.preventDefault();
    socketParam.emit("game_start", lobbyId, 10);
  };

  if (socketParam && socketParam.id == leaderId) {
    return <button onClick={handleClick}>Baslat</button>;
  } else {
    return <></>;
  }
};

export default StartButton;
