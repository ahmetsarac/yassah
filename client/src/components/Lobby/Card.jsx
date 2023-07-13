import { useState } from "react";
import WORDS from "../../util/mock_data";

const Card = ({ socket, lobbyId, currentWord }) => {
  const correctButtonHandle = () => {
    socket.emit("correct_button_pressed", lobbyId, socket.team);
  };
  const passButtonHandle = () => {
    socket.emit("pass_button_pressed");
  };
  const yassahButtonHandle = () => {
    socket.emit("yassah_button_pressed");
  };

  return (
    <div className="card-section">
      <ul className="card-list">
        <li className="word">{currentWord?.word}</li>
        {currentWord?.bannedWords?.map((bannedWord) => {
          return <li className="banned-word">{bannedWord}</li>;
        })}
      </ul>
      <div className="card-buttons">
        <ul>
          <li>
            <button onClick={correctButtonHandle} className="correct-button">
              Dogru
            </button>
          </li>
          <li>
            <button onClick={passButtonHandle} className="pass-button">
              Pas
            </button>
          </li>
          <li>
            <button onClick={yassahButtonHandle} className="yassah-button">
              Yassah
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
