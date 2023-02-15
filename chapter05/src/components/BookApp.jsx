import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { createData } from './BookCreateData';
import { BookForm } from './BookForm';
import { BookTable } from './BookTable';

const initData = [
  createData({title:'宇宙大冒険',author:'ミッキー', price:1200}),
  createData({title:'ドッキリ図鑑',author:'ドナルド', price:1500}),
  createData({title:'氷魔法の秘密',author:'エルサ', price:1800}),
  createData({title:'初心者の水泳',author:'アリエル', price:2100}),
];

export const BookApp = () => {
  const [list, setList] = useState(initData);
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{textAlign: 'center'}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ブックアプリ
          </Typography>
        </Toolbar>
      </AppBar>
      <BookForm setList={setList} />
      <BookTable list={list} />
    </Box>
  );
};

