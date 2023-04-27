import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import io from "socket.io-client";
import LobbyTitle from "../components/Lobby/LobbyTitle";
import LobbyNotFound from "../components/Lobby/LobbyNotFound";

const Lobby = () => {
  const { lobbyId } = useParams();
  const { creatorFromHome } = useLocation().state || {};
  const [creator, setCreator] = useState("");
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState("");
  const [isJoined, setIsJoined] = useState(false);

  const connectToSocket = () => {
    const socket = io(BASE_URL, {
      transports: ["websocket"],
      query: {
        lobbyId,
        username: name || creatorFromHome,
      },
    });
    socket.on("connect", () => {
      socket.emit("joinRoom", lobbyId, name || creatorFromHome);
      console.log("new socket connection");
    });
    socket.on("new_player", (players) => {
      console.log("connected players: ", players);
      setPlayers(players);
    });
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
      console.log("owner From Home : ", creatorFromHome);
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
        <div className="lobby-inner-section">
          <LobbyTitle creator={creator} />
          {players.map((player, index) => {
            return (
              <h2 key={index}>
                player {index}: {player}
              </h2>
            );
          })}
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
        </div>
      ) : (
        <LobbyNotFound />
      )}
    </div>
  );
};

export default Lobby;
