const Team = ({ team, joinTeam, teamColor, leaderId }) => {
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
      <button className="join-team-button" onClick={joinTeam}>Join the {teamColor} team</button>
    </div>
  );
};

export default Team;
