import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export function TableUser({handleUpdate, handleHide,text,line }) {
  const [tableData, setTableData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:2020/api/v1/user/getAll');
      const data = response.data.data;

      if (data && data.userAll && Array.isArray(data.userAll)) {
        setTableData(data.userAll);
      } else {
        console.error('Data format is not correct', data);
        setTableData([]);
      }
      console.log("Data fetching success", data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setTableData([]); 
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:2020/api/v1/user/${id}`);
      setTableData(tableData.filter((row) => row._id !== id));
      console.log("User deleted successfully");
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <>
      <form>
        <TextField
          fullWidth
          id="standard-basic"
          label="Search Users"
          variant="outlined"
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ fontWeight: "bold", fontSize: "20px" }}
        />
      </form>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">First Name</StyledTableCell>
              <StyledTableCell align="right">Last Name</StyledTableCell>
              <StyledTableCell align="right">BirthDay</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Gender</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
              <StyledTableCell align="right">Update</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(tableData) && tableData.filter((row) => {
              return searchQuery.toLowerCase() === '' ? row : row.firstName.toLowerCase().includes(searchQuery);
            }).map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell align="right">{row.firstName}</StyledTableCell>
                <StyledTableCell align="right">{row.lastName}</StyledTableCell>
                <StyledTableCell align="right">{row.dateOfBirth}</StyledTableCell>
                <StyledTableCell align="right">{row.address}</StyledTableCell>
                <StyledTableCell align="right">{row.gender}</StyledTableCell>
                <StyledTableCell align="right">
                  <button onClick={() => handleDelete(row._id)}>Delete</button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <button onClick={() => handleUpdate(row)}>Update</button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
