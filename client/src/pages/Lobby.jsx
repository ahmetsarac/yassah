import { Fragment, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import io from "socket.io-client";
import LobbyTitle from "../components/Lobby/LobbyTitle";
import LobbyNotFound from "../components/Lobby/LobbyNotFound";
import GameSection from "../components/Lobby/GameSection";
import LobbyForm from "../components/Lobby/LobbyForm";
import StartButton from "../components/Lobby/StartButton";

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
  const [leaderId, setLeaderId] = useState(null);
  const [timer, setTimer] = useState(null);
  const [isGameStarted, setIsGameStarted] = useState(null);
  var isStarted = null;

  const connectToSocket = () => {
    const assignTeams = (players) => {
      setWaitingPlayers(players.waiting);
      setBlueTeam(players.blue_team);
      setRedTeam(players.red_team);
      console.log("blue team ", blueTeam);
      console.log("new player", players);
      if (!leaderId) setLeaderId(players.leaderId);
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
    socket.on("counter_start", (count) => {
      if (isStarted === null) {
        isStarted = true;
        setIsGameStarted(true);
      }
      console.log(count);
      setTimer(count);
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
          <StartButton
            socketParam={socketParam}
            leaderId={leaderId}
            lobbyId={lobbyId}
          />
          <p>Timer: {timer}</p>
          <GameSection
            socket={socketParam}
            waitingPlayers={waitingPlayers}
            lobbyId={lobbyId}
            blueTeam={blueTeam}
            redTeam={redTeam}
            leaderId={leaderId}
            isGameStarted={isGameStarted}
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
