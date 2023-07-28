const TurnInfo = ({ currentSpeaker, currentObserver }) => {
  return (
    <p>
      Anlatan {currentSpeaker}, Gozetleyen {currentObserver}
    </p>
  );
};

export default TurnInfo;
