import logo from './logo.svg';
import './App.css';

function App() {
  const appContainerStyle = {
    textAlign: 'center',
  };
  
  const titleStyle = {
    color: 'white',
    backgroundColor: 'red',
    padding: '10px',
  };
  
  const boxStyle = {
    width : '60%',
    margin: '30px auto',
    padding: '10px',
    borderRadius: '15px',
    border: '4px solid pink',
    backgroundColor: 'MistyRose',
    fontSize: '1.2rem',
  };
  
  return (
    <div style={appContainerStyle}>
      <h1 style={titleStyle}>天気予報</h1>
      <div style={boxStyle}>
        <div>晴れのち曇り</div>
        <div>最高気温：20度</div>
        <div>最低気温：8度</div>
      </div>
    </div>
  );
}

export default App;
