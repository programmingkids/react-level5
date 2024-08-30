import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <Title>天気予報</Title>
      <Box>
        <div>晴れのち曇り</div>
        <div>最高気温：20度</div>
        <div>最低気温：8度</div>
      </Box>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  color: white;
  background-color: red;
  padding: 10px;  
`;

const Box = styled.div`
  width : 60%;
  margin: 30px auto;
  padding: 10px;
  border-radius: 15px;
  border: 4px solid pink;
  background-color: MistyRose;
  font-size: 1.2rem;
`;

export default App;
