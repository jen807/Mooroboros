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
  @media screen and (max-width: 440px) {
    width: 100%;
    height: 100%;
    padding: 40px 20px;
  }
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
  @media screen and (max-width: 440px) {
    margin-top: 5px;
  }
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
  @media screen and (max-width: 440px) {
    margin-bottom: 5px;
  }
`;

const Main = styled.div`
  width: 36%;
  height: 120px;
  background-color: #b0dcff;
  font-size: ${({ wordLength }) =>
    wordLength > 10 ? "2.2vw" : wordLength > 6 ? "2.5vw" : "3vw"};
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
  @media screen and (max-width: 440px) {
    width: 120px;
    height: 50px;
    font-size: ${({ wordLength }) =>
      wordLength > 10 ? "22px" : wordLength > 6 ? "24px" : "26px"};
  }
`;

const Con1 = styled.div`
  width: 27%;
  height: 9vh;
  border-radius: 10px;
  background-color: #bfe3ff;
  font-size: ${({ wordLength }) =>
    wordLength > 10 ? "1.6vw" : wordLength > 6 ? "1.8vw" : "2vw"};
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
  @media screen and (max-width: 440px) {
    font-size: ${({ wordLength }) =>
      wordLength > 10 ? "12px" : wordLength > 6 ? "16px" : "18px"};
    width: 80px;
    height: 40px;
    border-radius: 8px;
  }
`;

const Con2 = styled.div`
  width: 25%;
  height: 7vh;
  border-radius: 10px;
  background-color: #e8f5ff;
  font-size: ${({ wordLength }) =>
    wordLength > 10 ? "1.1vw" : wordLength > 6 ? "1.3vw" : "1.5vw"};
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

  @media screen and (max-width: 440px) {
    font-size: ${({ wordLength }) =>
      wordLength > 10 ? "11px" : wordLength > 6 ? "14px" : "16px"};
    width: 85px;
    height: 35px;
    border-radius: 8px;
  }
`;

const Con3 = styled.div`
  width: 28%;
  height: 45px;
  border-radius: 10px;
  background-color: #ececec;
  font-size: ${({ wordLength }) =>
    wordLength > 10 ? "0.8vw" : wordLength > 6 ? "0.9vw" : "1vw"};
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

  @media screen and (max-width: 440px) {
    width: 75px;
    height: 30px;
    border-radius: 5px;
    font-size: ${({ wordLength }) =>
      wordLength > 10 ? "10px" : wordLength > 6 ? "14px" : "16px"};
  }
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
