import Players from "./Players";
import Team from "./Team";

const GameSection = ({ socket, players, lobbyId, blueTeam, redTeam }) => {
  const joinBlue = () => {
    socket.emit("join_blue", lobbyId);
  };

  const joinRed = () => {
    socket.emit("join_red", lobbyId);
  };

  return (
    <div className="lobby-teams">
      <Team team={blueTeam} joinTeam={joinBlue} teamColor={"blue"} />
      <Players players={players} />
      <Team team={redTeam} joinTeam={joinRed} teamColor={"red"} />
    </div>
  );
};

export default GameSection;
