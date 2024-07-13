import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export const SerachInput=()=> {
  return (
    <Stack  >
     
      <Autocomplete sx={{ width: 400,paddingLeft:'50px' }}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
   
            {...params}
            label="Search Users"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}


const top100Films = [
 
];
