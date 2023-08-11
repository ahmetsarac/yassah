const GameInfo = ({ timer, blueTeamScore, redTeamScore }) => {
  return (
    <div className="game-info">
      <p className="game-info-team-blue">mavi takım: {blueTeamScore}</p>
      <p className="game-info-timer">süre: {timer}</p>
      <p className="game-info-team-red">kırmızı takım: {redTeamScore}</p>
    </div>
  );
};

export default GameInfo;
