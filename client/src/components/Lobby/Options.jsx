import { Fragment, useState } from "react";
import GameState from "../../../../server/src/util/game_state";

const Options = ({ gameState, socket, leaderId, lobbyId }) => {
  const roundArr = [1, 2, 3, 4, 5];
  const passArr = [3, 4, 5];
  const timeArr = ["3 sn", "30 sn", "45 sn", "60 sn", "90 sn", "120 sn"];
  const [passNumber, setPassNumber] = useState(3);
  const [time, setTime] = useState(timeArr[0]);
  const [round, setRound] = useState(roundArr[0]);

  const handleClick = (event) => {
    socket.emit("game_start", lobbyId, passNumber, round, time.split(" ")[0]);
  };

  const handlePassChange = (event) => {
    setPassNumber(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleRoundChange = (event) => {
    setRound(event.target.value);
  };

  const show =
    gameState == GameState.IDLE ||
    gameState == GameState.ERROR ||
    gameState == GameState.OVER;

  return (
    show && (
      <div className="options">
        {socket && socket.id == leaderId ? (
          <Fragment>
            <button className="start-button" onClick={handleClick}>
              baslat
            </button>
            <div className="round-setting">
              <label>round</label>
              <select value={round} onChange={handleRoundChange}>
                {roundArr.map((element, index) => {
                  return (
                    <option key={index} value={element}>
                      {element}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="time-setting">
              <label>süre</label>
              <select value={time} onChange={handleTimeChange}>
                {timeArr.map((element, index) => {
                  return (
                    <option key={index} value={element}>
                      {element}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="pass-setting">
              <label>pas hakki</label>
              <select value={passNumber} onChange={handlePassChange}>
                {passArr.map((element, index) => {
                  return (
                    <option key={index} value={element}>
                      {element}
                    </option>
                  );
                })}
              </select>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <p>Pas hakkki: {passNumber}</p>
            <p>Sure: {time}</p>
          </Fragment>
        )}
      </div>
    )
  );
};

export default Options;
