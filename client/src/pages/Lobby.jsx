import { Fragment, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import io from "socket.io-client";
import LobbyTitle from "../components/Lobby/LobbyTitle";
import LobbyNotFound from "../components/Lobby/LobbyNotFound";
import GameSection from "../components/Lobby/GameSection";
import LobbyForm from "../components/Lobby/LobbyForm";

const Lobby = () => {
  const { lobbyId } = useParams();
  const { creatorFromHome } = useLocation().state || {};
  const [creator, setCreator] = useState("");
  const [waitingPlayers, setWaitingPlayers] = useState([]);
  const [name, setName] = useState("");
  const [blueTeam, setBlueTeam] = useState([]);
  const [redTeam, setRedTeam] = useState([]);
  const [isJoined, setIsJoined] = useState(false);
  const [socketParam, setSocketParam] = useState(null);
  const [leader, setLeader] = useState(null);

  const connectToSocket = () => {
    const assignTeams = (players) => {
      setWaitingPlayers(players.waiting);
      setBlueTeam(players.blue_team);
      setRedTeam(players.red_team);
      if (!leader) setLeader(players.leader);
    };
    const socket = io(BASE_URL, {
      transports: ["websocket"],
      query: {
        lobbyId,
        username: name || creatorFromHome,
      },
    });
    socket.on("connect", () => {
      socket.emit(
        "join_room",
        lobbyId,
        name || creatorFromHome,
        creatorFromHome ? true : false
      );
    });
    socket.on("new_player", (players) => {
      assignTeams(players);
    });
    socket.on("new_player_in_blue", (players) => {
      assignTeams(players);
    });
    socket.on("new_player_in_red", (players) => {
      assignTeams(players);
    });

    setSocketParam(socket);
  };

  useEffect(() => {
    const checkLobby = async () => {
      const response = await fetch(`${BASE_URL}/api/lobby/${lobbyId}`, {
        method: "GET",
      });
      const json = await response.json();
      if (!response.ok) {
        setCreator(null);
      } else {
        setCreator(json.creator);
      }
    };

    if (creatorFromHome) {
      setCreator(creatorFromHome);
      setIsJoined(true);
      connectToSocket();
    } else {
      checkLobby();
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      return;
    }
    setIsJoined(true);
    connectToSocket();
  };

  return (
    <div className="lobby">
      {creator ? (
        <Fragment>
          <LobbyTitle creator={creator} />
          <GameSection
            socket={socketParam}
            waitingPlayers={waitingPlayers}
            lobbyId={lobbyId}
            blueTeam={blueTeam}
            redTeam={redTeam}
            leader={leader}
          />

          {!isJoined && (
            <LobbyForm handleSubmit={handleSubmit} setName={setName} />
          )}
        </Fragment>
      ) : (
        <LobbyNotFound />
      )}
    </div>
  );
};

export default Lobby;
