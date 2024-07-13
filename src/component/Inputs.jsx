import { Box, Container, TextField, Radio, FormControlLabel, RadioGroup} from "@mui/material";


export const Inputs = () => {
  return (
    <Container maxWidth="sm">
      <h4>Add User</h4>
      <form>
        <TextField fullWidth id="standard-basic" label="First Name" variant="standard" />
        <TextField fullWidth id="standard-basic" label="Last Name" variant="standard" />
        <TextField fullWidth id="standard-basic" label="" variant="standard" InputProps={{ type: 'date' }} />
        <TextField fullWidth id="standard-basic" label="Address" variant="standard" />
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="gender">
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
  
  
      </form>
    </Container>
  );
};
