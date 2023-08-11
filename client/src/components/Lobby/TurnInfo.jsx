const TurnInfo = ({ currentSpeaker, currentObserver }) => {
  return (
    <div className="turn-info">
      <p>
        anlatan:{" "}
        <span className={`turn-${currentSpeaker.team.toLowerCase()}`}>
          {`${currentSpeaker.username}`}
        </span>
      </p>
      <p>
        gözetleyen:{" "}
        <span className={`turn-${currentObserver.team.toLowerCase()}`}>
          {currentObserver.username}
        </span>
      </p>
    </div>
  );
};

export default TurnInfo;
