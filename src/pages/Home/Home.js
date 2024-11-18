import styled from "styled-components";
import WordCloudWrap from "./components/WordCloudWrap";
import { useState } from "react";
import { fetchDefinition, fetchSynonyms } from "../../api";
import snakeImg from "../../components/imgs/snake.png";
import thinkingImg from "../../components/imgs/thinking.png";

const Container = styled.section`
  max-width: 1920px;
  width: 100%;
  height: 100vh;
  padding: 8vh 4vw 8vh 6.5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 440px) {
    padding: 0 3vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const LeftCon = styled.div`
  width: 30%;
  margin-right: 6.5vw;
  padding: 0 2.5vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: clamp(1.6vw, 2.6vw, 2.8vw);
    font-weight: 900;
    color: #fff;
    letter-spacing: clamp(1px, 0.5vw, 3px);
    text-align: center;
  }

  @media screen and (max-width: 440px) {
    width: 100%;
    position: absolute;
    margin-right: 0;
    height: 95.6vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 13vh 0 15vh 0;

    h3 {
      font-size: 30px;
    }
  }
`;

const SubmitWrap = styled.div`
  margin-top: 7vh;
  margin-bottom: 5vh;
  p {
    margin-left: 0.5vw;
    margin-top: 0.8vh;
    font-size: calc(0.5vw + 0.5vh);
    letter-spacing: 0.2px;
  }

  @media screen and (max-width: 440px) {
    margin-top: 5vh;
    p {
      font-size: 12px;
      margin-left: 1vw;
    }
  }
`;

const Form = styled.form`
  input {
    all: unset;
    width: 100%;
    border-bottom: 1px solid #fff;
    padding: 1vh;
    font-size: calc(1vw + 0.5vh);
    box-sizing: border-box;
    font-weight: 800;
    letter-spacing: 0.2px;

    &::placeholder {
      color: #fff;
      opacity: 0.5;
    }
  }

  @media screen and (max-width: 440px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
    width: 100%;
    input {
      all: unset;
      width: 100%;
      border-bottom: 1px solid #fff;
      padding: 1vh 1.75vw 1vh 0.5vw;
      box-sizing: border-box;
      font-weight: 800;
      font-size: 20px;
      letter-spacing: 0.2px;

      &::placeholder {
        color: #fff;
        opacity: 0.5;
      }
    }
  }
`;

const WordViewWrap = styled.div`
  width: 100%;
  height: 33vh;
  background-color: white;
  border-radius: 3vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 5vh;

  @media screen and (max-width: 440px) {
    display: none;
  }
`;

const Word = styled.h2`
  color: #00304e;
  opacity: 0.8;
  font-size: ${({ wordLength }) =>
    wordLength > 10
      ? "2.3vw"
      : wordLength > 9
      ? "2.8vw"
      : wordLength > 8
      ? "3.1vw"
      : wordLength > 6
      ? "3.4vw"
      : "3.6vw"};
  font-weight: 900;
  margin-bottom: 20px;
`;

const Definition = styled.p`
  color: #00304e;
  opacity: 0.5;
  line-height: 20px;
  font-weight: 500;
  font-size: 0.8vw;
`;

const RightCon = styled.div`
  position: relative;
  padding: 12vh 5vw;
  width: 55.9vw;
  height: 79.2vh;
  background-color: white;
  border-radius: 5vh;

  @media screen and (max-width: 440px) {
    width: 100%;
    height: 300px;
    position: relative;
    top: -3vh;
    left: 0;
    border-radius: 3vh;
    padding: 0;
  }
`;

const Snake = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 30vw;

  @media screen and (max-width: 440px) {
    width: 45vw;
  }
`;

const Think = styled.div`
  position: absolute;
  right: 5%;
  top: 5%;
  height: 30vh;
  width: 30vw;
  max-width: 500px;

  @media screen and (max-width: 440px) {
    width: 50vw;
    left: 40%;
    bottom: 30%;
  }
`;

const Home = () => {
  const [input, setInput] = useState("");
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [relatedWords, setRelatedWords] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!input) return;

    const def = await fetchDefinition(input);
    const synonyms = await fetchSynonyms(input);

    setWord(input);
    setDefinition(def);
    setRelatedWords(synonyms);
  };

  const handleWordClick = async (clickedWord) => {
    const def = await fetchDefinition(clickedWord);
    const synonyms = await fetchSynonyms(clickedWord);
    setWord(clickedWord);
    setDefinition(def);
    setRelatedWords(synonyms);
  };

  const resetToMain = () => {
    setInput("");
    setWord("");
    setDefinition("");
    setRelatedWords([]);
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <Container>
      {word ? (
        <>
          <LeftCon>
            <h3 onClick={resetToMain} style={{ cursor: "pointer" }}>
              MOOROBOROS
            </h3>
            <SubmitWrap>
              <Form onSubmit={handleSearch}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter the word on your mind!"
                />
              </Form>
              <p>Please enter nouns only!</p>
            </SubmitWrap>
            <WordViewWrap>
              <Word wordLength={word.length}>{word}</Word>
              <Definition>{truncateText(definition, 90)}</Definition>
            </WordViewWrap>
          </LeftCon>
          <RightCon>
            <WordCloudWrap
              mainWord={word}
              relatedWords={relatedWords}
              onWordClick={handleWordClick}
            />
          </RightCon>
        </>
      ) : (
        <>
          <LeftCon>
            <h3>MOOROBOROS</h3>
            <SubmitWrap>
              <Form onSubmit={handleSearch}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter the word on your mind!"
                />
              </Form>
              <p>Please enter nouns only!</p>
            </SubmitWrap>
          </LeftCon>
          <RightCon>
            <Snake>
              <img src={snakeImg} alt="snake" />
            </Snake>
            <Think>
              <img src={thinkingImg} alt="thinking" />
            </Think>
          </RightCon>
        </>
      )}
    </Container>
  );
};

export default Home;
