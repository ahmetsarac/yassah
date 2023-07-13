const GameInfo = ({ timer, blueTeamScore, redTeamScore }) => {
  return (
    <div className="game-info">
      <p className="game-info-team-blue">Blue Team: {blueTeamScore}</p>
      <p className="game-info-timer" >Timer: {timer}</p>
      <p className="game-info-team-red">Red Team: {redTeamScore}</p>
    </div>
  );
};

export default GameInfo;
