import { useEffect, useState } from "react";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then((response) => response.json())
      .then((data) => {
        console.log("API data:", data); // Log the API data to the console
        setGames(data); // Assuming the API response is an array of game objects
      })
      .catch((error) => console.error("Error fetching API", error));
  }, []);

  return (
    <div>
      <h2>Games:</h2>
      <ul>
        {games.map((game, index) => (
          <li key={index}>
            <h3>{game.title}</h3>
            <p>Publisher: {game.publisher}</p>
            <p>Release Date: {game.release_date}</p>
            <p>Platform: {game.platform.join(", ")}</p>
            <p>Size: {game.size_gb} GB</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
