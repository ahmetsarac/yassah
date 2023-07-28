import WaitingPlayers from "./WaitingPlayers";
import Team from "./Team";
import Card from "./Card";
import GameState from "../../../../server/src/util/game_state";
import ReadyButton from "./ReadyButton";
import ErrorText from "./ErrorText";
import TurnInfo from "./TurnInfo";
import GameOverInfo from "./GameOverInfo";

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
  winnerTeam,
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
      case GameState.OVER:
        return <GameOverInfo winnerTeam={winnerTeam} />;
    }
  })();

  return (
    <div className="lobby-teams">
      <Team
        gameState={gameState}
        team={blueTeam}
        joinTeam={joinBlue}
        teamColor={"blue"}
        leaderId={leaderId}
      />
      {middleSection}
      <Team
        gameState={gameState}
        team={redTeam}
        joinTeam={joinRed}
        teamColor={"red"}
        leaderId={leaderId}
      />
    </div>
  );
};

export default GameSection;
