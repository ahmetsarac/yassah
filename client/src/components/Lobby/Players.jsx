const Players = ({ players }) => {
  return (
    <div className="lobby-team-container">
      <ul>
        {players?.map((player, index) => {
          if (!player.team) {
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

export default Players;
