import { Fragment, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import io from "socket.io-client";
import LobbyTitle from "../components/Lobby/LobbyTitle";
import LobbyNotFound from "../components/Lobby/LobbyNotFound";
import GameSection from "../components/Lobby/GameSection";

const Lobby = () => {
  const { lobbyId } = useParams();
  const { creatorFromHome } = useLocation().state || {};
  const [creator, setCreator] = useState("");
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState("");
  const [blueTeam, setBlueTeam] = useState([]);
  const [redTeam, setRedTeam] = useState([]);
  const [isJoined, setIsJoined] = useState(false);
  const [socketParam, setSocketParam] = useState(null);

  const connectToSocket = () => {
    const socket = io(BASE_URL, {
      transports: ["websocket"],
      query: {
        lobbyId,
        username: name || creatorFromHome,
      },
    });
    socket.on("connect", () => {
      socket.emit("join_room", lobbyId, name || creatorFromHome);
    });
    socket.on("new_player", (players, bluePlayers, redPlayers) => {
      setPlayers(players);
      setBlueTeam(bluePlayers);
      setRedTeam(redPlayers);
    });
    socket.on("new_player_in_blue", (players, bluePlayers, redPlayers) => {
      setBlueTeam(bluePlayers);
      setRedTeam(redPlayers);
      setPlayers(players);
    });
    socket.on("new_player_in_red", (players, bluePlayers, redPlayers) => {
      setRedTeam(redPlayers);
      setBlueTeam(bluePlayers);
      setPlayers(players);
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
            players={players}
            lobbyId={lobbyId}
            blueTeam={blueTeam}
            redTeam={redTeam}
          />

          {!isJoined && (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <button type="submit">Join the lobby</button>
            </form>
          )}
        </Fragment>
      ) : (
        <LobbyNotFound />
      )}
    </div>
  );
};

export default Lobby;
