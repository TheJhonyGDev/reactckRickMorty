import "./App.css";
import imgen1 from "./img/rick-morty.png";
import React, { useState } from "react";
import Characters from "./Components/Characters";
function App() {
  const [characters, setCharacters] = useState(null);
  const reApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const charaterapi = await api.json();
    setCharacters(charaterapi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters}></Characters>
          ) : (
          <>
            <img src={imgen1} alt="" className="img-home" />
            <button className="btn-search" onClick={reApi}>
              Buscar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
