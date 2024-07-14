import React, { useState } from 'react';
import { Container } from "@mui/material";
import { Inputs } from '../component/Inputs';
import { TableUser } from '../component/TableUser';


export const User = () => {
  const [rows, setRow] = useState({});
  const [rowId, setRowId] = useState({});
  const [rowFirstName, setRowFirstName] = useState("");
  const [rowLastName, setRowLastName] = useState("");
  const [rowBirthDay, setRowBirthday] = useState("");
  const [rowAddress, setRowAddress] = useState("");
  const [rowGender, setRowGender] = useState("");
  const [hide, setHide] = useState(true);
  const [update, setUpdate] = useState("none");

  const setState = (data) => {
    setRow(data);
    setRowId(data.rowId);
    setRowFirstName(data.firstName);
    setRowLastName(data.lastName);
    setRowBirthday(data.dateOfBirth);
    setRowAddress(data.address);
    setRowGender(data.gender);
    setUpdate(true);
    setHide(false);
  };

  const handleUpdate = (row) => {
    setState(row);
    console.log(row);
  };
  const text = ()=>{
    console.log("Text");

  }

  return (
    <Container>
      <Inputs
      rowId={rowId} setRowId={setRowId}
        rows={rows} setRow={setRow}
        hide={hide} setHide={setHide}
        rowFirstName={rowFirstName} setRowFirstName={setRowFirstName}
        rowLastName={rowLastName} setRowLastName={setRowLastName}
        rowBirthDay={rowBirthDay} setRowBirthday={setRowBirthday}
        rowAddress={rowAddress} setRowAddress={setRowAddress}
        rowGender={rowGender} setRowGender={setRowGender}
        update={update} setUpdate={setUpdate}
      />
      <TableUser handleUpdate={handleUpdate}handleHide={setHide} text={text}/>
    </Container>
  );
};
