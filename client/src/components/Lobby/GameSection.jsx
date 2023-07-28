import WaitingPlayers from "./WaitingPlayers";
import Team from "./Team";
import Card from "./Card";
import GameState from "../../../../server/src/util/game_state";
import ReadyButton from "./ReadyButton";
import ErrorText from "./ErrorText";

const GameSection = ({
  socket,
  gameState,
  errorText,
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

  middleSection = (function () {
    switch (gameState) {
      case GameState.IDLE:
        return (
          <WaitingPlayers waitingPlayers={waitingPlayers} leaderId={leaderId} />
        );
      case GameState.ERROR:
        return <ErrorText errorText={errorText} />;
      case GameState.READY:
        if (currentSpeaker.id == socket.id) {
          return <ReadyButton socket={socket} lobbyId={lobbyId} />;
        } else {
          return (
            <TurnInfo
              currentSpeaker={currentSpeaker}
              currentObserver={currentObserver}
            />
          );
        }
      case GameState.STARTED:
        return (
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
      case GameState.FINISHED:
        return <>game finished</>;
    }
  })();

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
