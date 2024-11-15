import styled from "styled-components";
import WordCloudWrap from "./components/WordCloudWrap";
// import { useFormState } from "react-hook-form";
import { useState } from "react";
import { fetchDefinition, fetchSynonyms } from "../../api";

const Container = styled.section`
  max-width: 1920px;
  width: 100%;
  height: 100vh;
  padding: 80px 80px 80px 125px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftCon = styled.div`
  width: 30%;
  margin-right: 125px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    font-size: 60px;
    font-weight: 900;
    color: #fff;
    letter-spacing: 1px;
  }
`;
const SubmitWrap = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  p {
    margin-left: 10px;
    margin-top: 10px;
    font-size: 16px;
    letter-spacing: 0.2px;
  }
`;
const Form = styled.form`
  input {
    all: unset;
    width: 100%;
    border-bottom: 1px solid #fff;
    padding: 10px;
    box-sizing: border-box;
    font-weight: 800;
    font-size: 24px;
    letter-spacing: 0.2px;

    &::placeholder {
      color: #fff;
      opacity: 0.5;
    }
  }
`;
const WordViewWrap = styled.div`
  width: 100%;
  height: 330px;
  background-color: white;
  border-radius: 30px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 50px;
`;
const Word = styled.h2`
  color: #00304e;
  opacity: 0.8;
  font-size: 80px;
  font-weight: 900;
  margin-bottom: 20px;
`;
const Definition = styled.p`
  color: #00304e;
  opacity: 0.5;
  line-height: 20px;
  font-weight: 500;
`;
const RightCon = styled.div`
  padding: 120px 130px;
  width: 70%;
  height: 100%;
  background-color: white;
  border-radius: 50px;
`;

const Home = () => {
  const [input, setInput] = useState("");
  const [word, setWord] = useState("Word");
  const [definition, setDefinition] = useState("That word's definition");
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

  return (
    <Container>
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
        <WordViewWrap>
          <Word>{word}</Word>
          <Definition>{definition}</Definition>
        </WordViewWrap>
      </LeftCon>
      <RightCon>
        <WordCloudWrap initialWord={word} fetchSynonyms={fetchSynonyms} />
      </RightCon>
    </Container>
  );
};

export default Home;
