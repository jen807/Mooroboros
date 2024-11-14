// App.js
import React, { useState } from "react";
import { fetchDefinition, fetchSynonyms } from "./api";

const App = () => {
  const [input, setInput] = useState("");
  const [definition, setDefinition] = useState("");
  const [synonyms, setSynonyms] = useState([]);

  const handleSearch = async () => {
    // 사전 정의 가져오기
    const fetchedDefinition = await fetchDefinition(input);
    setDefinition(fetchedDefinition);

    // 유의어 가져오기
    const fetchedSynonyms = await fetchSynonyms(input);
    setSynonyms(fetchedSynonyms);
  };

  return (
    <div>
      <h1>Word Search</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter an English word"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        <h2>Definition:</h2>
        <p>{definition}</p>
      </div>
      <div>
        <h2>Synonyms:</h2>
        <ul>
          {synonyms.map((synonym, index) => (
            <li key={index}>{synonym}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
