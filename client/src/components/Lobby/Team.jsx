const Team = ({ team, joinTeam, teamColor, leaderId }) => {
  return (
    <div className="lobby-team-container">
      <ul className={`${teamColor}-team`}>
        {team?.map((player, index) => {
          return (
            <li key={index}>
              player: {player.username} {player.id == leaderId && "👑"}
            </li>
          );
        })}
      </ul>
      <button onClick={joinTeam}>Join the {teamColor} team</button>
    </div>
  );
};

export default Team;
