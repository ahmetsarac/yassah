const assignTeams = (players, sockets) => {
  const waiting_players = [];
  const players_of_blue = [];
  const players_of_red = [];
  let leader;
  for (var player of sockets) {
    const playerObj = {
      id: player.id,
      username: player.username,
      team: player.team,
    };
    if (player.team == "WAITING") waiting_players.push(playerObj);
    if (player.team == "BLUE") players_of_blue.push(playerObj);
    if (player.team == "RED") players_of_red.push(playerObj);
    if (player.is_leader) leader = playerObj;
  }
  players.leader = leader;
  players.waiting = waiting_players;
  players.blue_team = players_of_blue;
  players.red_team = players_of_red;
};

export default assignTeams;
