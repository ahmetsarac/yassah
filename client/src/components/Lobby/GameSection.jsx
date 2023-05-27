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
  isGameStarted,
}) => {
  console.log("game is statred", isGameStarted);

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
        <Card />
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
