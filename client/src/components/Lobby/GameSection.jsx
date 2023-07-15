import WaitingPlayers from "./WaitingPlayers";
import Team from "./Team";
import Card from "./Card";

const GameSection = ({
  socket,
  waitingPlayers,
  lobbyId,
  blueTeam,
  redTeam,
  leaderId,
  currentSpeaker,
  isGameStarted,
  currentWord,
  blueTeamPass,
  redTeamPass
}) => {
  console.log("game is started", isGameStarted);

  const joinBlue = () => {
    socket.emit("join_blue", lobbyId);
  };

  const joinRed = () => {
    socket.emit("join_red", lobbyId);
  };

  return (
    <div className="lobby-teams">
      <Team
        team={blueTeam}
        joinTeam={joinBlue}
        teamColor={"blue"}
        leaderId={leaderId}
      />
      {isGameStarted ? (
        <Card socket={socket} lobbyId={lobbyId} currentSpeaker={currentSpeaker} currentWord={currentWord} blueTeamPass={blueTeamPass} redTeamPass={redTeamPass}/>
      ) : (
        <WaitingPlayers waitingPlayers={waitingPlayers} leaderId={leaderId} />
      )}
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
