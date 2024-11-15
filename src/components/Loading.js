import styled, { keyframes } from "styled-components";
const rotate = keyframes`
0%{
    transform: rotate(0deg);
}
100%{
    transform: rotate(360deg);
}
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Spinner = styled.img`
  width: 100px;
  animation: ${rotate} 2s linear infinite;
`;

const LoadingText = styled.p`
  font-size: 62px;
  font-weight: 900;
  color: #fff;
  margin-top: 50px;
`;

const Loading = () => {
  return (
    <Container>
      <div>
        <Spinner src="/imgs/LoadingSnake.png" alt="Loading" />
        <LoadingText>LOADING..</LoadingText>
      </div>
    </Container>
  );
};

export default Loading;
