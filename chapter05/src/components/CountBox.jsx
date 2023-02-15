import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const CountBox = () => {
  const [count, setCount] = useState(0);
  
  return (
    <Box sx={{ textAlign:'center'}} my={2}>
      <Title>カウント</Title>
      <Box fontSize={20}>{count}</Box>
      <Box display="flex" justifyContent="center" gap={2} my={3}>
        <Button variant="contained" onClick={() => setCount(count+1)}>カウントアップ</Button>
        <Button variant="contained" onClick={() => setCount(0)}>リセット</Button>
        <Button variant="contained" onClick={() => setCount(count-1)}>カウントダウン</Button>
      </Box>
    </Box>
  );    
};

const Title = (props) => <h1>{props.children}</h1>;
