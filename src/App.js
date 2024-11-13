// App.js
import React, { useState } from "react";
import { fetchSynonyms, fetchDefinition } from "./api";

const App = () => {
  const [input, setInput] = useState("");
  const [synonyms, setSynonyms] = useState([]);
  const [definitions, setDefinitions] = useState({});

  const handleSearch = async () => {
    try {
      // 1. 입력된 단어의 유의어를 Datamuse API로 가져오기
      const synonymResults = await fetchSynonyms(input);

      // 2. 유의어 리스트를 상태에 저장
      setSynonyms(synonymResults);

      // 3. 각 유의어의 정의를 DictionaryAPI.dev로 가져오기
      const definitionsObj = {};
      for (const synonym of synonymResults) {
        const definition = await fetchDefinition(synonym.word);
        definitionsObj[synonym.word] = definition;
      }

      // 4. 정의를 상태에 저장
      setDefinitions(definitionsObj);
    } catch (error) {
      console.error("검색 오류:", error);
    }
  };

  return (
    <div>
      <h1>영단어 유의어 및 정의 찾기</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter an English word"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {synonyms.map((synonym, index) => (
          <li key={index}>
            <strong>{synonym.word}</strong>:{" "}
            {definitions[synonym.word] || "Loading..."}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
