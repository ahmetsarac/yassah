import WaitingPlayers from "./WaitingPlayers";
import Team from "./Team";

const GameSection = ({
  socket,
  waitingPlayers,
  lobbyId,
  blueTeam,
  redTeam,
  leader,
}) => {
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
        leader={leader}
      />
      <WaitingPlayers waitingPlayers={waitingPlayers} leader={leader} />
      <Team
        team={redTeam}
        joinTeam={joinRed}
        teamColor={"red"}
        leader={leader}
      />
    </div>
  );
};

export default GameSection;
