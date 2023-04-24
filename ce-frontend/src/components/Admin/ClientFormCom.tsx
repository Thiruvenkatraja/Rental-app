import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  OutlinedInput,
  Paper,
  Select,
  Theme,
  Typography,
} from "@material-ui/core";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useTheme } from "@material-ui/core";
import React from "react";
import {
  Box,
  Grid,
  SelectChangeEvent,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import TextField from "@mui/material/TextField";
const propertyType = [
  {
    value: "Select",
    label: "Select",
  },
  {
    value: "Rent",
    label: "Rent",
  },
  {
    value: "Sale",
    label: "Sale",
  },
];

const listingType = [
  {
    value: "Select",
    label: "Select",
  },
  {
    value: "Houses",
    label: "Houses",
  },
  {
    value: "Appartments",
    label: "Appartments",
  },
  {
    value: "Offices",
    label: "Offices",
  },
];

const oneTwoThree = [
  {
    value: "Select",
    label: "Select",
  },
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
];

const ClientFormCom = () => {
  const MenuProps = {
    PaperProps: {
      style: {
        width: 250,
      },
    },
  };

  const theme = useTheme();
  const TextFieldStyle = {
    "& .MuiOutlinedInput-root": {
      boxShadow: "none",
      background: "#F6F6F6",
      marginTop: "0.5rem",
    },
    "& .MuiTextField-root": {
      backgroundColor: "#F6F6F6",
    },
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      background: "#F6F6F6",

      borderRadius: "12px",
    },
    "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
      border: 0,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#84342d",
    },
  };
  return (
    <Paper
      elevation={3}
      style={{
        position: "relative",
        width: "650px",
        height: "1528px",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            height: "54px",
            boxShadow: `0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)`,
            "& .MuiOutlinedInput-notchedOutline": {},
          },
          "& .MuiInputBase-input": {},
          "& .MuiTextField-root": {
            width: "30ch",
          },
          padding: "2rem",
        }}
      >
        <Grid item xs={6}>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontWeight: "650",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Full name
          </Typography>
          <TextField
            placeholder="John Joe"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "250px",
              marginTop: "0.5rem",
            }}
            sx={TextFieldStyle}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontWeight: "650",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Email
          </Typography>
          <TextField
            placeholder="example@mail.com"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "250px",
              marginTop: "0.5rem",
            }}
            sx={TextFieldStyle}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontWeight: "650",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Mobile number
          </Typography>
          <TextField
            placeholder="+91 9012121212"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "250px",
              marginTop: "0.5rem",
            }}
            sx={TextFieldStyle}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontWeight: "650",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Property Title
          </Typography>
          <TextField
            placeholder="Tittle"
            id="outlined-basic"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                boxShadow: "none",
                marginTop: "0.5rem",
                width: "551px",
              },
              "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                background: "#F6F6F6",

                borderRadius: "12px",
              },
              "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                border: 0,
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#84342d",
                },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontWeight: "650",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Property Type
          </Typography>
          <TextField
            variant="outlined"
            sx={TextFieldStyle}
            style={{ marginTop: "5px" }}
            id="outlined-select-type"
            select
            defaultValue="Select"
          >
            {propertyType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontWeight: "650",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Listing Type
          </Typography>
          <TextField
            variant="outlined"
            sx={TextFieldStyle}
            style={{ marginTop: "5px" }}
            id="outlined-select-type"
            select
            defaultValue="Select"
          >
            {listingType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontWeight: "650",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Location
          </Typography>
          <TextField
            placeholder="ex. Chennai"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "250px",
              marginTop: "0.5rem",
            }}
            sx={TextFieldStyle}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontWeight: "650",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Address
          </Typography>
          <TextField
            placeholder="ex. No 1, street, etc.,"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "250px",
              marginTop: "0.5rem",
            }}
            sx={TextFieldStyle}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontWeight: "650",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Listing Price
          </Typography>
          <TextField
            placeholder="$ 1000"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "250px",
              marginTop: "0.5rem",
            }}
            sx={TextFieldStyle}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontWeight: "650",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Bedrooms
          </Typography>
          <TextField
            variant="outlined"
            sx={TextFieldStyle}
            style={{ marginTop: "5px" }}
            id="outlined-select-type"
            select
            defaultValue="Select"
          >
            {oneTwoThree.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontWeight: "650",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Bathrooms
          </Typography>
          <TextField
            variant="outlined"
            sx={TextFieldStyle}
            style={{ marginTop: "5px" }}
            id="outlined-select-type"
            select
            defaultValue="Select"
          >
            {oneTwoThree.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontWeight: "650",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Parking Lots
          </Typography>
          <TextField
            variant="outlined"
            sx={TextFieldStyle}
            style={{ marginTop: "5px" }}
            id="outlined-select-type"
            select
            defaultValue="Select"
          >
            {oneTwoThree.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontWeight: "650",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Construction sqft.
          </Typography>
          <TextField
            placeholder="ex. 2000 sqft"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "250px",
              marginTop: "0.5rem",
            }}
            sx={TextFieldStyle}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontWeight: "650",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Land sqft.
          </Typography>
          <TextField
            placeholder="ex. 2000 sqft"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "250px",
              marginTop: "0.5rem",
            }}
            sx={TextFieldStyle}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontWeight: "650",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Listing short description
          </Typography>
          <TextField
            placeholder="Please enter up to 240 characters."
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "552px",
              marginTop: "0.5rem",
            }}
            sx={TextFieldStyle}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontWeight: "650",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Listing lond description
          </Typography>
          <TextField
            placeholder="Please enter up to 4000 characters."
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "552px",
              marginTop: "0.5rem",
            }}
            sx={TextFieldStyle}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{
              marginTop: "2rem",
              fontFamily: "Poppins",
              fontWeight: "650",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Property amenities
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Garden" />
            <FormControlLabel control={<Checkbox />} label="Pool" />
            <FormControlLabel control={<Checkbox />} label="Vigilance" />
          </FormGroup>
        </Grid>
        <Grid item xs={3}>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Security" />
            <FormControlLabel control={<Checkbox />} label="Cameras" />
            <FormControlLabel control={<Checkbox />} label="Parking" />
          </FormGroup>
        </Grid>
        <Grid item xs={3}>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Laundry" />
            <FormControlLabel control={<Checkbox />} label="Jacuzzi" />
            <FormControlLabel control={<Checkbox />} label="Solar panel" />
          </FormGroup>
        </Grid>
        <Grid item xs={3}>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Internet" />
            <FormControlLabel control={<Checkbox />} label="Elevator " />
            <FormControlLabel control={<Checkbox />} label="Garage" />
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{
              marginTop: "1rem",
              fontFamily: "Poppins",
              fontWeight: "650",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Listing images
          </Typography>
          <p>
            Please share a Google Drive or Imgur link of your listing images
          </p>
          <TextField
            placeholder="ex. Drive.google.com/..."
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "551px",
              marginTop: "0.5rem",
            }}
            sx={TextFieldStyle}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            style={{
              marginTop: "4.5rem",
              fontWeight: "1000",
              color: theme.palette.secondary.main,
              backgroundColor: theme.palette.primary.main,
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ClientFormCom;
