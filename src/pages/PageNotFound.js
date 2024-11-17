import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #fff;
`;

const CloudWrapper = styled.div`
  background-image: url("${process.env.PUBLIC_URL}/imgs/Cloud.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 900px;
  height: 900px;
  position: absolute;
  top: 0;
  left: 50vw;
  translate: -47%;
  z-index: 0;
`;

const Title = styled.h1`
  font-size: 100px;
  font-weight: 700;
  color: #fff;
  z-index: 1;
`;

const Subtitle = styled.h3`
  font-size: 20px;
  color: #fff;
  margin-top: 10px;
  margin-bottom: 8px;
  z-index: 1;
`;

const BackLink = styled.a`
  font-size: 16px;
  color: #fff;
  text-decoration: underline;
  cursor: pointer;
  z-index: 1;
`;

const SnakeWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
`;

const SnakeIcon = styled.img`
  width: 500px;
`;

const PageNotFound = () => {
  const handleGoBack = () => {
    window.location.href = "/";
  };

  return (
    <Container>
      <CloudWrapper></CloudWrapper>
      <Title>404</Title>
      <Subtitle>Sorry, we couldn't find this page</Subtitle>
      <BackLink onClick={handleGoBack}>click here to go back</BackLink>
      <SnakeWrapper>
        <SnakeIcon
          src={`${process.env.PUBLIC_URL}/imgs/snake.png`}
          alt="Snake"
        />
      </SnakeWrapper>
    </Container>
  );
};

export default PageNotFound;
