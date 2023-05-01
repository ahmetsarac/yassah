const Team = ({ team, joinTeam, teamColor }) => {
  return (
    <div className="lobby-team-container">
      <ul className={`${teamColor}-team`}>
        {team?.map((player, index) => {
          return <li key={index}> player: {player}</li>;
        })}
      </ul>
      <button onClick={joinTeam}>Join the blue team</button>
    </div>
  );
};

export default Team;
