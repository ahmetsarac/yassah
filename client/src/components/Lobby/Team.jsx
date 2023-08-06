import GameState from "../../../../server/src/util/game_state";

const Team = ({ gameState, team, joinTeam, teamColor, leaderId }) => {
  const show =
    gameState == GameState.IDLE ||
    gameState == GameState.ERROR ||
    gameState == GameState.OVER;

  return (
    <div className="lobby-team-container">
      <ul className={`${teamColor}-team`}>
        {team?.map((player, index) => {
          return (
            <li className="player-name" key={index}>
              {player.username} {player.id == leaderId && "👑"}
            </li>
          );
        })}
      </ul>
      {show && (
        <button className="join-team-button" onClick={joinTeam}>
          {teamColor == "blue" ? "mavi" : "kırmızı"} takıma katıl
        </button>
      )}
    </div>
  );
};

export default Team;
