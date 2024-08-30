/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function App() {
  const AppContainer = css`
    text-align: center;
  `;
  
  const Title = css`
    color: white;
    background-color: red;
    padding: 10px;  
  `;
  
  const Box = css`
    width : 60%;
    margin: 30px auto;
    padding: 10px;
    border-radius: 15px;
    border: 4px solid pink;
    background-color: MistyRose;
    font-size: 1.2rem;
  `;
  
  return (
    <div css={AppContainer}>
      <h1 css={Title}>天気予報</h1>
      <div css={Box}>
        <div>晴れのち曇り</div>
        <div>最高気温：20度</div>
        <div>最低気温：8度</div>
      </div>
    </div>
  );
}

export default App;
