import { Fragment, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import io from "socket.io-client";
import LobbyTitle from "../components/Lobby/LobbyTitle";
import LobbyNotFound from "../components/Lobby/LobbyNotFound";
import GameSection from "../components/Lobby/GameSection";
import LobbyForm from "../components/Lobby/LobbyForm";
import Options from "../components/Lobby/Options";
import GameInfo from "../components/Lobby/GameInfo";

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
  const [blueTeamScore, setBlueTeamScore] = useState(0);
  const [redTeamScore, setRedTeamScore] = useState(0);
  const [blueTeamPass, setBlueTeamPass] = useState(0);
  const [redTeamPass, setRedTeamPass] = useState(0);
  const [currentWord, setCurrentWord] = useState({});
  const [currentSpeaker, setCurrentSpeaker] = useState(null);
  var isStarted = null;

  const connectToSocket = () => {
    const assignTeams = (players) => {
      setWaitingPlayers(players.waiting);
      setBlueTeam(players.blue_team);
      setRedTeam(players.red_team);
      console.log("blue team ", blueTeam);
      console.log("new player", players);
      if (!leaderId) setLeaderId(players.leader.id);
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
    socket.on("new_player", (players, id) => {
      assignTeams(players);
      if (socket.id === id) socket.team = "WAITING";
    });
    socket.on("new_player_in_blue", (players, id) => {
      assignTeams(players);
      if (socket.id === id) socket.team = "BLUE";
    });
    socket.on("new_player_in_red", (players, id) => {
      assignTeams(players);
      if (socket.id === id) socket.team = "RED";
    });
    socket.on("counter_start", (count) => {
      if (isStarted === null) {
        isStarted = true;
        setIsGameStarted(true);
      }
      console.log(count);
      setTimer(count);
    });
    socket.on("game_start_object", (roomObj) => {
      setCurrentWord(roomObj.current_word);
      setBlueTeamPass(roomObj.blue_team_pass);
      setRedTeamPass(roomObj.red_team_pass);
      setCurrentSpeaker(roomObj.current_speaker);
      console.log(roomObj);
    });
    socket.on(
      "team_score_up",
      (blue_team_score, red_team_score, current_word) => {
        setBlueTeamScore(blue_team_score);
        setRedTeamScore(red_team_score);
        setCurrentWord(current_word);
      }
    );

    socket.on("team_pass", (blue_team_pass, red_team_pass, current_word) => {
      setBlueTeamPass(blue_team_pass);
      setRedTeamPass(red_team_pass);
      setCurrentWord(current_word);
    });

    socket.on(
      "team_yassah",
      (blue_team_score, red_team_score, current_word) => {
        setBlueTeamScore(blue_team_score);
        setRedTeamScore(red_team_score);
        setCurrentWord(current_word);
      }
    );
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
          <Options socket={socketParam} leaderId={leaderId} lobbyId={lobbyId} />
          <GameInfo
            timer={timer}
            blueTeamScore={blueTeamScore}
            redTeamScore={redTeamScore}
          />
          <GameSection
            socket={socketParam}
            waitingPlayers={waitingPlayers}
            lobbyId={lobbyId}
            blueTeam={blueTeam}
            redTeam={redTeam}
            leaderId={leaderId}
            currentSpeaker={currentSpeaker}
            isGameStarted={isGameStarted}
            currentWord={currentWord}
            blueTeamPass={blueTeamPass}
            redTeamPass={redTeamPass}
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
