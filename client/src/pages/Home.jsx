import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HomeTitle from "../components/Home/HomeTitle";
import HomeForm from "../components/Home/HomeForm";

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
    <div className="home">
      <HomeTitle title="Yassah" />
      <HomeForm handleSubmit={handleSubmit} setName={setName} />
    </div>
  );
};

export default Home;
