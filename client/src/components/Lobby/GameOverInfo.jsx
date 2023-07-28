const GameOverInfo = ({ winnerTeam }) => {
  return (
    <>
      Oyun bitti, Kazanan takim {winnerTeam}
      <br />
      Tekrar oynamak ister misin?
    </>
  );
};

export default GameOverInfo;
