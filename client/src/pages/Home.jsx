import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HomeTitle from "../components/Home/HomeTitle";
import HomeForm from "../components/Home/HomeForm";

const Home = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name) {
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(`${BASE_URL}/api/lobby`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
      
      if (response.ok) {
        console.log("response is ok");
        const json = await response.json();
        navigate(`${json.id}`, { state: { creatorFromHome: name } });
      }
        setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
         console.log(error);
      setError(error);
    }
  };

  return (
    <div className="home">
      {error && <div>error: ${error.message.toString()}</div>}
      {isLoading && <div>Loading...</div>}
      <HomeTitle title="yassah" />
      <HomeForm
        handleSubmit={handleSubmit}
        setName={setName}
        placeholder={"mahlas"}
        buttonText={"lobi olustur"}
      />
      <HomeForm
        handleSubmit={handleSubmit}
        setName={setName}
        placeholder={"lobi id"}
        buttonText={"lobiye katil"}
      />
    </div>
  );
};

export default Home;
