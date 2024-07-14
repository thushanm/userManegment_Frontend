import { Box, Container, TextField, Radio, FormControlLabel, RadioGroup } from "@mui/material";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox.js";
import { useState, useEffect } from "react";
import axios from "axios";

export const Inputs = (props) => {
  const [uId,setUid]=useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    if (props.rows) {
      setUid(props.rowId)
      setFName(props.rowFirstName);
      setLName(props.rowLastName);
      setDate(props.rowBirthDay);
      setAddress(props.rowAddress);
      setGender(props.rowGender);
    }
  }, [props.rows,props.rowId, props.rowFirstName, props.rowLastName, props.rowBirthDay, props.rowAddress, props.rowGender]);

  const handleUpdate = async (e) => {
   
    const jsonData = {

      firstName: fName,
      lastName: lName,
      dateOfBirth: date,
      address: address,
      gender: gender,
    };

    if (props.update) {
      console.log("Haiii");
      try {
        console.log("Haiii");
        const upResponse = await axios.put(`http://localhost:2020/api/v1/user`, jsonData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Update Successful:", upResponse.data);
        props.handleUpdate(jsonData); 
      } catch (err) {
        console.log("Haiii");
        console.error("Update Error:", err);
      }
    } else {
      console.log("Haiii");
      try {
        const response = await axios.post("http://localhost:2020/api/v1/user", jsonData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Save Successful:", response.data);
      } catch (err) {
        console.error("Save Error:", err);
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <h4>{props.update ? "Update User" : "Add User"}</h4>
      <form>
        <TextField
          fullWidth
          id="standard-basic"
          label="First Name"
          variant="standard"
          value={fName}
          onChange={(e) => { setFName(e.target.value); props.setRowFirstName(e.target.value); }}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Last Name"
          variant="standard"
          value={lName}
          onChange={(e) => { setLName(e.target.value); props.setRowLastName(e.target.value); }}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Date of Birth"
          variant="standard"
          InputProps={{ type: "date" }}
          value={date}
          onChange={(e) => { setDate(e.target.value); props.setRowBirthday(e.target.value); }}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Address"
          variant="standard"
          value={address}
          onChange={(e) => { setAddress(e.target.value); props.setRowAddress(e.target.value); }}
        />
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="gender" value={gender}>
          <FormControlLabel
            value="Female"
            control={<Radio />}
            label="Female"
            onChange={(e) => setGender("Female")}
          />
          <FormControlLabel
            value="Male"
            control={<Radio />}
            label="Male"
            onChange={(e) => setGender("Male")}
          />
          <FormControlLabel
            value="Other"
            control={<Radio />}
            label="Other"
            onChange={(e) => setGender("Other")}
          />
        </RadioGroup>
        <Button
          sx={{ backgroundColor: "black", marginBottom: "10px" }}
          variant="contained"
          onClick={handleUpdate}
          endIcon={<AddBoxIcon />}
          type="submit"
        >
          {props.update ? "Update User" : "Save User"}
        </Button>
      </form>
    </Container>
  );
};
