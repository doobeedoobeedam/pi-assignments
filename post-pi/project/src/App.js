import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://pokeapi.deno.dev/pokemon?limit=20");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchItem(event.target.value);
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="App">
      <input
        className="card"
        placeholder="Search..."
        value={searchItem}
        onChange={handleSearchChange}
      />

      <div className="cards">
        {filteredData.map((item) => (
          <div key={item.id} className="card">
            <img src={item.imageUrl} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <dl className="details">
              <div>
                <dt>Defense</dt>
                <dd>{item.stats.Defense}%</dd>
              </div>
              <div>
                <dt>Speed</dt>
                <dd>{item.stats.Speed}%</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
