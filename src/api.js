export const fetchSynonyms = async (word) => {
  try {
    const response = await fetch(
      `https://api.datamuse.com/words?rel_syn=${word}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Datamuse API 요청 오류:", error);
    return [];
  }
};

export const fetchDefinition = async (word) => {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();
    return (
      data[0]?.meanings[0]?.definitions[0]?.definition || "정의가 없습니다."
    );
  } catch (error) {
    console.error("DictionaryAPI.dev 요청 오류:", error);
    return "정의를 찾을 수 없습니다.";
  }
};
