import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const BookTable = ({list}) => {
  return (
    <TableContainer component={Paper} sx={{m:2,width:'unset'}}>
      <Table aria-label="Book Table">
        <TableHead>
          <TableRow sx={{ backgroundColor:'#2196f3'}}>
            <TableCell sx={{color:'white'}}>タイトル</TableCell>
            <TableCell sx={{color:'white'}}>著者</TableCell>
            <TableCell sx={{color:'white'}}>金額</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(row => (
            <TableRow key={row.title}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.author}</TableCell>
              <TableCell>{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
