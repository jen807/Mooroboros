// api.js
export const fetchDefinition = async (word) => {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();
    // 첫 번째 뜻만 반환
    return (
      data[0]?.meanings[0]?.definitions[0]?.definition ||
      "Definition not found."
    );
  } catch (error) {
    console.error("DictionaryAPI 요청 오류:", error);
    return "Error fetching definition.";
  }
};

export const fetchSynonyms = async (word) => {
  try {
    const response = await fetch(
      `https://api.datamuse.com/words?rel_syn=${word}`
    );
    const data = await response.json();
    return data.map((synonym) => synonym.word); // 유의어 리스트만 반환
  } catch (error) {
    console.error("Datamuse API 요청 오류:", error);
    return [];
  }
};
