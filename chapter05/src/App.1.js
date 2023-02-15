import './App.css';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function App() {
  const AppContainerStyle = {
    textAlign: 'center',
  };
  
  const Title1Style = {
    padding: '15px 0',
    backgroundColor: 'red',
    color: 'white',
    fontSize: '2rem',
  };
  
  const BoxStyle = {
    width: '60%',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: 'MistyRose',
    border: '4px solid pink',
    borderRadius : '15px',
    fontSize: '1.2rem',
  };
  
  return (
    <Box sx={AppContainerStyle}>
      <Typography component="h1" sx={Title1Style}>天気予報</Typography>
      <Box sx={BoxStyle}>
        <div>晴れのち曇り</div>
        <div>最高気温：20度</div>
        <div>最低気温：8度</div>
      </Box>
    </Box>
  );
}

export default App;
