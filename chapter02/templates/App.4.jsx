function App() {
  return (
    <>
      <div className="AppContainer">
        <h1 className="Title">天気予報</h1>
        <div className="Box">
          <div>晴れのち曇り</div>
          <div>最高気温：20度</div>
          <div>最低気温：8度</div>
        </div>
      </div>
      <style jsx>{`
        .AppContainer {
          text-align: center;
        }
        .Title {
          color: white;
          background-color: red;
          padding: 10px;  
        }
        .Box {
          width : 60%;
          margin: 30px auto;
          padding: 10px;
          border-radius: 15px;
          border: 4px solid pink;
          background-color: MistyRose;
          font-size: 1.2rem;
        }
      `}</style>
    </>
  );
}

export default App;
