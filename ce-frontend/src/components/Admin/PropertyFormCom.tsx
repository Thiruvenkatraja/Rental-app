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

const PropertyFormCom = () => {
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
      marginTop: "0.5rem",
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
        height: "970px",
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
                width: "548px",
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
            style={{ marginTop: "10px" }}
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
            style={{ marginTop: "10px" }}
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
            Overall sqft.
          </Typography>
          <TextField
            placeholder="ex. sqft"
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
            Blocks
          </Typography>
          <TextField
            placeholder="ex. No of blocks"
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
            Floors
          </Typography>
          <TextField
            placeholder="ex. No of floors"
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
            Flats
          </Typography>
          <TextField
            placeholder="ex. No of flats"
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
            1BHK
          </Typography>
          <TextField
            placeholder="ex. No of 1BHK"
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
            2BHK
          </Typography>
          <TextField
            placeholder="ex. No of 2BHK"
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
            3BHK
          </Typography>
          <TextField
            placeholder="ex. No of 3BHK"
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
              marginTop: "2rem",
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
              width: "548px",
              marginTop: "0.5rem",
              //   backgroundColor: theme.palette.secondary.main,
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            style={{
              marginTop: "2rem",
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

export default PropertyFormCom;
