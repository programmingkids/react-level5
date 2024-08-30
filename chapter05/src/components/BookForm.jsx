import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { createEmptyData } from './BookCreateData';

export const BookForm = ({setList}) => {
  const [book, setBook] = useState(createEmptyData());
  
  const handleOnChange = (e) => {
    setBook((book) => ({
      ...book,
      [e.target.id]: e.target.value,
    }));
  };
  
  const handleOnClick = (e) => {
    setList(list => list.concat(book));
    setBook(createEmptyData());
  };
  
  return (
    <>
      <Box 
        component="h1" 
        sx={{textAlign:'center', margin: 1}}>
        ブック入力フォーム
      </Box>
      <Box
        component="form"
        sx={{
          m : 2,
          '& > :not(style)': { my: 1},
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          fullWidth
          id="title"
          label="タイトル"
          value={book.title}
          onChange={handleOnChange}
        />
        <TextField
          fullWidth
          id="author"
          label="著者"
          value={book.author}
          onChange={handleOnChange}
        />
        <TextField
          fullWidth
          type="number"
          id="price"
          label="金額"
          value={book.price}
          onChange={handleOnChange}
        />
        <Button 
          size="large" 
          variant="contained"
          onClick={handleOnClick}>
          登録
        </Button>
      </Box>
    </>
  );
};
