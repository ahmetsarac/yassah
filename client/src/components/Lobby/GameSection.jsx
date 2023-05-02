import WaitingPlayers from "./WaitingPlayers";
import Team from "./Team";

const GameSection = ({
  socket,
  waitingPlayers,
  lobbyId,
  blueTeam,
  redTeam,
}) => {
  const joinBlue = () => {
    socket.emit("join_blue", lobbyId);
  };

  const joinRed = () => {
    socket.emit("join_red", lobbyId);
  };

  return (
    <div className="lobby-teams">
      <Team team={blueTeam} joinTeam={joinBlue} teamColor={"blue"} />
      <WaitingPlayers waitingPlayers={waitingPlayers} />
      <Team team={redTeam} joinTeam={joinRed} teamColor={"red"} />
    </div>
  );
};

export default GameSection;
