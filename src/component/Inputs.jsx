import { Box, Container, TextField, Radio, FormControlLabel, RadioGroup } from "@mui/material";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox.js";
import { useState } from "react";
import axios from "axios";

export const Inputs = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    const jsonData = {
      firstName: fName,
      lastName: lName,
      dateOfBirth: date,
      address: address,
      gender: gender,
    };

    try {
      const response = await axios.post("http://localhost:2020/api/v1/user", jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Save Successful:", response.data); // Access and log actual data
    } catch (err) {
      console.error("Save Error:", err); // Log specific error details for debugging
    }
  };

  return (
    <Container maxWidth="sm">
      <h4>Add User</h4>
      <form>
        <TextField
          fullWidth
          id="standard-basic"
          label="First Name"
          variant="standard"
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Last Name"
          variant="standard"
          value={lName}
          onChange={(e) => setLName(e.target.value)}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label=""
          variant="standard"
          InputProps={{ type: "date" }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Address"
          variant="standard"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
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
          onClick={handleClick}
          endIcon={<AddBoxIcon />}
          id={"btnId"}
          type={"submit"}
        >
          Save Item
        </Button>
      </form>
    </Container>
  );
};
