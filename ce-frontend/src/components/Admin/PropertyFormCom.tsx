import {
  Avatar,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useTheme } from "@material-ui/core";
import React from "react";
import { Box, Grid, MenuItem, SelectChangeEvent } from "@mui/material";

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const PropertyFormCom = () => {
  const MenuProps = {
    PaperProps: {
      style: {
        // maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const names = ["Appartments", "Villas", "Offices"];
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <Paper
      elevation={3}
      style={{
        position: "relative",
        width: "650px",
        height: "589px",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          "& .MuiOutlinedInput-root": {
            // border: "none",
            // outline: "none",
            borderRadius: "12px",
            height: "54px",
            boxShadow: `0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)`,
            "& .MuiOutlinedInput-notchedOutline": {
              //   border: "none",
            },
          },
          "& .MuiInputBase-input": {
            // backgroundColor: "#F6F6F6",
          },
          "& .MuiTextField-root": {
            // backgroundColor: "#F6F6F6",
            width: "30ch",
          },
          padding: "2rem",
        }}
      >
        <Grid>
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
            style={{
              width: "520px",
              marginTop: "1rem",
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
            //   placeholder="Tittle"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "250px",
              marginTop: "1rem",
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
            Listing Type
          </Typography>
          <TextField
            //   placeholder="Tittle"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "250px",
              marginTop: "1rem",
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
            Location
          </Typography>
          <TextField
            placeholder="ex. Chennai"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "250px",
              marginTop: "1rem",
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
            Address
          </Typography>
          <TextField
            placeholder="ex. No 1, street, etc.,"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "250px",
              marginTop: "1rem",
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
            Overall sqft.
          </Typography>
          <TextField
            placeholder="ex. sqft"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "250px",
              marginTop: "1rem",
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
            Blocks
          </Typography>
          <TextField
            placeholder="ex. No of blocks"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "250px",
              marginTop: "1rem",
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
            Floors
          </Typography>
          <TextField
            placeholder="ex. No of floors"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "250px",
              marginTop: "1rem",
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
            Flats
          </Typography>
          <TextField
            placeholder="ex. No of flats"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "250px",
              marginTop: "1rem",
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PropertyFormCom;
