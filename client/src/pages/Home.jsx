import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name) {
      return;
    }
    const response = await fetch(`${BASE_URL}/api/lobby`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    const json = await response.json();
    navigate(`${json.id}`, { state: { creatorFromHome: name } });
  };

  return (
    <div>
      <h1>Yassah</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button type="submit">Create lobby</button>
      </form>
    </div>
  );
};

export default Home;
