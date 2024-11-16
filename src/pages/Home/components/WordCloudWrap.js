import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const bounceIn = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

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
  font-size: ${({ wordLength }) =>
    wordLength > 10 ? "40px" : wordLength > 6 ? "48px" : "65px"};
  font-weight: 900;
  border-radius: 10px;
  color: #00304e;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s;
  }
  animation: ${({ isBouncing }) => (isBouncing ? bounceIn : "none")} 0.6s
    ease-in-out;
  cursor: pointer;
`;

const Con1 = styled.div`
  width: 200px;
  height: 90px;
  border-radius: 10px;
  background-color: #bfe3ff;
  font-size: ${({ wordLength }) =>
    wordLength > 10 ? "25px" : wordLength > 6 ? "30px" : "40px"};
  font-weight: 600;
  color: #5a84a1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${({ isBouncing }) => (isBouncing ? bounceIn : "none")} 0.6s
    ease-in-out;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s;
  }
  cursor: pointer;
`;

const Con2 = styled.div`
  width: 170px;
  height: 60px;
  border-radius: 10px;
  background-color: #e8f5ff;
  font-size: ${({ wordLength }) =>
    wordLength > 10 ? "20px" : wordLength > 6 ? "25px" : "28px"};
  font-weight: 500;
  color: #6d8ca1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${({ isBouncing }) => (isBouncing ? bounceIn : "none")} 0.6s
    ease-in-out;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s;
  }
  cursor: pointer;
`;

const Con3 = styled.div`
  width: 120px;
  height: 45px;
  border-radius: 10px;
  background-color: #ececec;
  font-size: ${({ wordLength }) =>
    wordLength > 10 ? "16px" : wordLength > 6 ? "18px" : "20px"};
  font-weight: 400;
  color: #8a8a8a;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${({ isBouncing }) => (isBouncing ? bounceIn : "none")} 0.6s
    ease-in-out;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s;
  }
  cursor: pointer;
`;

const WordCloudWrap = ({ mainWord, relatedWords, onWordClick }) => {
  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    setIsBouncing(true);
    const timeout = setTimeout(() => setIsBouncing(false), 600);
    return () => clearTimeout(timeout);
  }, [mainWord]);

  const ClickHandler = (e) => {
    const clickedWord = e.target.innerText;
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
        <Con3
          isBouncing={isBouncing}
          wordLength={con3Words[0]?.length || 0}
          onClick={ClickHandler}
        >
          {con3Words[0]}
        </Con3>
        <BottomWrap>
          <Con3
            isBouncing={isBouncing}
            wordLength={con3Words[1]?.length || 0}
            onClick={ClickHandler}
          >
            {con3Words[1]}
          </Con3>
          <Con3
            isBouncing={isBouncing}
            wordLength={con3Words[2]?.length || 0}
            onClick={ClickHandler}
          >
            {con3Words[2]}
          </Con3>
        </BottomWrap>
      </Wrap1>

      <Wrap2>
        <Con2
          isBouncing={isBouncing}
          wordLength={con2Words[0]?.length || 0}
          onClick={ClickHandler}
        >
          {con2Words[0]}
        </Con2>
        <Con1
          isBouncing={isBouncing}
          wordLength={con1Words[0]?.length || 0}
          onClick={ClickHandler}
        >
          {con1Words[0]}
        </Con1>
        <Con2
          isBouncing={isBouncing}
          wordLength={con2Words[1]?.length || 0}
          onClick={ClickHandler}
        >
          {con2Words[1]}
        </Con2>
      </Wrap2>

      <Wrap3>
        <Con1
          isBouncing={isBouncing}
          wordLength={con1Words[1]?.length || 0}
          onClick={ClickHandler}
        >
          {con1Words[1]}
        </Con1>
        <Main isBouncing={isBouncing} wordLength={mainWord?.length || 0}>
          {mainWord}
        </Main>
        <Con1
          isBouncing={isBouncing}
          wordLength={con1Words[2]?.length || 0}
          onClick={ClickHandler}
        >
          {con1Words[2]}
        </Con1>
      </Wrap3>

      <Wrap4>
        <Con2
          isBouncing={isBouncing}
          wordLength={con2Words[2]?.length || 0}
          onClick={ClickHandler}
        >
          {con2Words[2]}
        </Con2>
        <Con1
          isBouncing={isBouncing}
          wordLength={con1Words[3]?.length || 0}
          onClick={ClickHandler}
        >
          {con1Words[3]}
        </Con1>
        <Con2
          isBouncing={isBouncing}
          wordLength={con2Words[3]?.length || 0}
          onClick={ClickHandler}
        >
          {con2Words[3]}
        </Con2>
      </Wrap4>

      <Wrap5>
        <TopWrap>
          <Con3
            isBouncing={isBouncing}
            wordLength={con3Words[3]?.length || 0}
            onClick={ClickHandler}
          >
            {con3Words[3]}
          </Con3>
          <Con3
            isBouncing={isBouncing}
            wordLength={con3Words[4]?.length || 0}
            onClick={ClickHandler}
          >
            {con3Words[4]}
          </Con3>
        </TopWrap>
        <Con3
          isBouncing={isBouncing}
          wordLength={con3Words[5]?.length || 0}
          onClick={ClickHandler}
        >
          {con3Words[5]}
        </Con3>
      </Wrap5>
    </WordCloudContainer>
  );
};

export default WordCloudWrap;
