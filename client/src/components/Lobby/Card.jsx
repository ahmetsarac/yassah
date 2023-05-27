import WORDS from "../../util/mock_data";

const Card = () => {
  return (
    <div className="card-section">
      <ul className="card-list">
        <li className="word">{WORDS[0].word}</li>
        {WORDS[0].bannedWords.map((bannedWord) => {
          return <li className="banned-word">{bannedWord}</li>;
        })}
      </ul>
    </div>
  );
};

export default Card;
