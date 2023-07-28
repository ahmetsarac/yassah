const TurnInfo = ({ currentSpeaker, currentObserver }) => {
  return (
    <p>
      Anlatan {currentSpeaker.username}, Gozetleyen {currentObserver.username}
    </p>
  );
};

export default TurnInfo;
