import { useEffect, useState } from "react";

function App() {
  const [planets, setPlanets] = useState([]); // Use a specific name for clarity

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/") // Fetch all planets
      .then((response) => response.json())
      .then((data) => setPlanets(data.results)) // Access actual planet data
      .catch((error) => console.error("Error fetching planets:", error));
  }, []); // Empty dependency array to fetch data only once

  return (
    <div>
      <h2>Star Wars Planets</h2> {/* Add a heading */}
      <ul>
        {planets.map((planet) => (
          <li key={planet.name}>
            {planet.name} {/* Access and display planet name directly */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
