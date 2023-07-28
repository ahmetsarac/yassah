import WaitingPlayers from "./WaitingPlayers";
import Team from "./Team";
import Card from "./Card";
import GameState from "../../../../server/src/util/game_state";
import ReadyButton from "./ReadyButton";

const GameSection = ({
  socket,
  gameState,
  waitingPlayers,
  lobbyId,
  blueTeam,
  redTeam,
  leaderId,
  currentSpeaker,
  currentObserver,
  currentWord,
  blueTeamPass,
  redTeamPass,
}) => {
  let middleSection;

  const joinBlue = () => {
    socket.emit("join_blue", lobbyId);
  };

  const joinRed = () => {
    socket.emit("join_red", lobbyId);
  };

  if (gameState == GameState.READY) {
    if (currentSpeaker.id == socket.id) {
      middleSection = <ReadyButton socket={socket} lobbyId={lobbyId} />;
    } else {
      middleSection = (
        <>
          anlatan {currentSpeaker.username}, gozleyen
          {currentObserver.username}
        </>
      );
    }
  } else if (gameState == GameState.STARTED) {
    middleSection = (
      <Card
        socket={socket}
        lobbyId={lobbyId}
        currentSpeaker={currentSpeaker}
        currentObserver={currentObserver}
        currentWord={currentWord}
        blueTeamPass={blueTeamPass}
        redTeamPass={redTeamPass}
      />
    );
  } else if (gameState == GameState.FINISHED) {
    middleSection = <>game finished</>;
  } else {
    middleSection = (
      <WaitingPlayers waitingPlayers={waitingPlayers} leaderId={leaderId} />
    );
  }

  return (
    <div className="lobby-teams">
      <Team
        team={blueTeam}
        joinTeam={joinBlue}
        teamColor={"blue"}
        leaderId={leaderId}
      />
      {middleSection}
      <Team
        team={redTeam}
        joinTeam={joinRed}
        teamColor={"red"}
        leaderId={leaderId}
      />
    </div>
  );
};

export default GameSection;
