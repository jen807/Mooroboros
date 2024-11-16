import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 62px;
  font-weight: 900;
  letter-spacing: 3px;
  color: #fff;
`;

const SnakeIcon = styled.img`
  animation: ${rotate} 2s linear infinite;
  width: 250px;
  height: 250px;
  margin-top: 80px;
`;

function InitialScreen() {
  return (
    <PreviewContainer>
      <h1>MOOROBOROS</h1>
      <SnakeIcon src="/imgs/LoadingSnake.png" alt="Preview" />
    </PreviewContainer>
  );
}

export default InitialScreen;
