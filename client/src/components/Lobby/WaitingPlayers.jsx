const WaitingPlayers = ({ waitingPlayers }) => {
  return (
    <div className="lobby-team-container">
      <ul>
        {waitingPlayers?.map((player, index) => {
          if (player.team == "WAITING") {
            return (
              <h2 key={index}>
                player {index}: {player.username}
              </h2>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default WaitingPlayers;
