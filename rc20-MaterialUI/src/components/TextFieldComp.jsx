import { Box, Container, FormControl, IconButton, Input, InputAdornment, InputLabel, MenuItem, OutlinedInput, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import AccountCircle from "@mui/icons-material/AccountCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const TextFieldComp = () => {
  

  const[erroR,setError]=useState(false)

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];



  return (
    <div>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4">TEXT-FIELD</Typography>

        <Box
          onClick={() => setError(!erroR)}
          sx={{ m: 4, background: "lightblue" }}
        >
          {/* margin="dense"=  az bir margin verir */}
          <TextField
            required
            id="outlined-basic"
            label="required"
            variant="outlined"
            defaultValue="email giriniz"
            margin="dense"
          />

          <TextField
            margin="dense"
            id="outlined-helperText"
            label="email"
            defaultValue="email giriniz"
            helperText={erroR && "yanlış girdiniz"}
          />

          <TextField
            margin="dense"
            error={erroR}
            id="standard-error-helper-text"
            label={erroR && "error"}
            defaultValue="Hello World"
            helperText={erroR && "yanlış girdiniz"}
            variant="standard"
            fullWidth
          />
        </Box>

        <Box>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <FormControl variant="standard" sx={{ m: 4 }}>
            <InputLabel htmlFor="input-with-icon-adornment">
              With a start adornment
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>

        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={erroR? "password":"text"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toogle password"
                 onClick={()=>setError(!erroR)}
                  edge="end"
                >
                 {erroR ? <VisibilityOffIcon/>:<VisibilityIcon/>}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Container>
    </div>
  );
}

export default TextFieldComp