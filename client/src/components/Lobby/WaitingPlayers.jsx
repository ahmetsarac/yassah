const WaitingPlayers = ({ waitingPlayers, leader }) => {
  return (
    <div className="lobby-team-container">
      <ul>
        {waitingPlayers?.map((player, index) => {
          if (player.team == "WAITING") {
            return (
              <h2 key={index}>
                player {index}: {player.username}{" "}
                {player.id == leader && "(leader)"}
              </h2>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default WaitingPlayers;
