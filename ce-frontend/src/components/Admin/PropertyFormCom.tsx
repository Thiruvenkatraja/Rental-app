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
      <Grid sx={{ padding: "2rem" }}>
        <Typography
           
          style={{
            fontFamily: "Poppins",
            fontWeight: "500",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Property Title
        </Typography>
        <TextField
          id="outlined-basic"
          label="Name of the property"
          variant="outlined"
          style={{
            width: "520px",
          }}
        />
      </Grid>
      <Grid sx={{ padding: "2rem" }}>
        <Typography
           
          style={{
            fontFamily: "Poppins",
            fontWeight: "500",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Property Type
        </Typography>
        <TextField
          id="outlined-basic"
          label="Type"
          variant="outlined"
          style={{
            width: "200px",
          }}
        />
      </Grid>
      <Grid sx={{ padding: "2rem" }}>
        <Typography
           
          style={{
            fontFamily: "Poppins",
            fontWeight: "500",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Listing Type
        </Typography>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
        //   onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid sx={{ padding: "2rem" }}>
        <Typography
           
          style={{
            fontFamily: "Poppins",
            fontWeight: "500",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Location
        </Typography>
        <TextField
          id="outlined-basic"
          label="District"
          variant="outlined"
          style={{
            width: "200px",
          }}
        />
      </Grid>
      <Grid sx={{ padding: "2rem" }}>
        <Typography
           
          style={{
            fontFamily: "Poppins",
            fontWeight: "500",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Address
        </Typography>
        <TextField
          id="outlined-basic"
          label="No 1, Street, etc.,"
          variant="outlined"
          style={{
            width: "200px",
          }}
        />
      </Grid>
      <Grid sx={{ padding: "2rem" }}>
        <Typography
           
          style={{
            fontFamily: "Poppins",
            fontWeight: "500",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Overall sqft.
        </Typography>
        <TextField
          id="outlined-basic"
          label="ex. sqft"
          variant="outlined"
          style={{
            width: "200px",
          }}
        />
      </Grid>
      <Grid sx={{ padding: "2rem" }}>
        <Typography
           
          style={{
            fontFamily: "Poppins",
            fontWeight: "500",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Blocks
        </Typography>
        <TextField
          id="outlined-basic"
          label="ex. No of blocks"
          variant="outlined"
          style={{
            width: "200px",
          }}
        />
      </Grid>
      <Grid sx={{ padding: "2rem" }}>
        <Typography
           
          style={{
            fontFamily: "Poppins",
            fontWeight: "500",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Floors
        </Typography>
        <TextField
          id="outlined-basic"
          label="ex. No of floors"
          variant="outlined"
          style={{
            width: "200px",
          }}
        />
      </Grid>
      <Grid sx={{ padding: "2rem" }}>
        <Typography
           
          style={{
            fontFamily: "Poppins",
            fontWeight: "500",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Flats
        </Typography>
        <TextField
          id="outlined-basic"
          label="ex. No of flats"
          variant="outlined"
          style={{
            width: "200px",
          }}
        />
      </Grid>
      <Grid sx={{ padding: "2rem" }}>
        <Typography
           
          style={{
            fontFamily: "Poppins",
            fontWeight: "500",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          1BHK
        </Typography>
        <TextField
          id="outlined-basic"
          label="ex. No of 1BHK"
          variant="outlined"
          style={{
            width: "200px",
          }}
        />
      </Grid>
      <Grid sx={{ padding: "2rem" }}>
        <Typography
           
          style={{
            fontFamily: "Poppins",
            fontWeight: "500",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          2BHK
        </Typography>
        <TextField
          id="outlined-basic"
          label="ex. No of 2BHK"
          variant="outlined"
          style={{
            width: "200px",
          }}
        />
      </Grid>
      <Grid sx={{ padding: "2rem" }}>
        <Typography
           
          style={{
            fontFamily: "Poppins",
            fontWeight: "500",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          3BHK
        </Typography>
        <TextField
          id="outlined-basic"
          label="ex. No of 3BHK"
          variant="outlined"
          style={{
            width: "200px",
          }}
        />
      </Grid>
      <Grid sx={{ padding: "2rem" }}>
        <Typography
          style={{
            fontFamily: "Poppins",
            fontWeight: "500",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Property amenities
        </Typography>
      </Grid>
    </Paper>
  );
};

export default PropertyFormCom;