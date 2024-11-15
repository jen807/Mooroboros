import { useEffect, useState } from "react";
import styled from "styled-components";

const WordCloudContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Wrap1 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const BottomWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Wrap2 = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const Wrap3 = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Wrap4 = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const Wrap5 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const TopWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.div`
  width: 280px;
  height: 120px;
  background-color: #b0dcff;
  font-size: 65px;
  font-weight: 900;
  border-radius: 10px;
  color: #00304e;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Con1 = styled.div`
  width: 200px;
  height: 90px;
  border-radius: 10px;
  background-color: #bfe3ff;
  font-size: 40px;
  font-weight: 600;
  color: #5a84a1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Con2 = styled.div`
  width: 170px;
  height: 60px;
  border-radius: 10px;
  background-color: #e8f5ff;
  font-size: 28px;
  font-weight: 500;
  color: #6d8ca1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Con3 = styled.div`
  width: 120px;
  height: 45px;
  border-radius: 10px;
  background-color: #ececec;
  font-size: 20px;
  font-weight: 400;
  color: #8a8a8a;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WordCloudWrap = ({ initialWord, fetchSynonyms }) => {
  const [mainWord, setMainWord] = useState(initialWord);
  const [relatedWords, setRelatedWords] = useState([]);

  useEffect(() => {
    const fetchRelatedWords = async () => {
      const synonyms = await fetchSynonyms(mainWord);
      setRelatedWords(synonyms);
    };
    fetchRelatedWords();
  }, [mainWord, fetchSynonyms]);

  const ClickHandler = (e) => {
    const clickedWord = e.target.innerText;
    setMainWord(clickedWord);
    if (onWordClick) {
      onWordClick(clickedWord);
    }
  };

  const con1Words = relatedWords.slice(0, 4);
  const con2Words = relatedWords.slice(4, 8);
  const con3Words = relatedWords.slice(8, 14);

  return (
    <WordCloudContainer>
      <Wrap1>
        <Con3 onClick={ClickHandler}>{con3Words[0]}</Con3>
        <BottomWrap>
          <Con3 onClick={ClickHandler}>{con3Words[1]}</Con3>
          <Con3 onClick={ClickHandler}>{con3Words[2]}</Con3>
        </BottomWrap>
      </Wrap1>

      <Wrap2>
        <Con2 onClick={ClickHandler}>{con2Words[0]}</Con2>
        <Con1 onClick={ClickHandler}>{con1Words[0]}</Con1>
        <Con2 onClick={ClickHandler}>{con2Words[1]}</Con2>
      </Wrap2>

      <Wrap3>
        <Con1 onClick={ClickHandler}>{con1Words[1]}</Con1>
        <Main>{mainWord}</Main>
        <Con1 onClick={ClickHandler}>{con1Words[2]}</Con1>
      </Wrap3>

      <Wrap4>
        <Con2 onClick={ClickHandler}>{con2Words[2]}</Con2>
        <Con1 onClick={ClickHandler}>{con1Words[3]}</Con1>
        <Con2 onClick={ClickHandler}>{con2Words[3]}</Con2>
      </Wrap4>

      <Wrap5>
        <TopWrap>
          <Con3 onClick={ClickHandler}>{con3Words[3]}</Con3>
          <Con3 onClick={ClickHandler}>{con3Words[4]}</Con3>
        </TopWrap>
        <Con3 onClick={ClickHandler}>{con3Words[5]}</Con3>
      </Wrap5>
    </WordCloudContainer>
  );
};

export default WordCloudWrap;
