import React from "react";
import { Box, MenuItem, TextField } from "@mui/material";
import { Typography, useTheme } from "@material-ui/core";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import PropertyDataGrid from "./PropertyDataGrid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
type Props = {};
const propertyType = [
  {
    value: "Block",
    label: "Block",
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

const PropertyDataElements = (props: Props) => {
  const theme = useTheme();
  const TextFieldStyle = {
    "& .MuiOutlinedInput-root": {
      background: "#F6F6F6",
      boxShadow: "none",
      marginTop: "0.5rem",
      height: "3rem",
    },
    "& .MuiTextField-root": {
      backgroundColor: "#F6F6F6",
    },
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      background: "#F6F6F6",
      borderRadius: "12px",
      height: "1rem",
    },
    "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
      border: 0,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#84342d",
    },
  };
  return (
    <>
      <Box
        sx={
          {
            //   display: "flex",
            //   flexDirection: "column",
            //   alignItems: "center",
            //   justifyContent: "flex-start",
            //   margin: "30px auto",
            //   width: "87%",
            //   padding: "5rem",
            //   marginTop: "90vh",
            //   marginLeft: "-10vw",
            // backgroundColor: theme.palette.secondary.main,
          }
        }
      >
        <Paper
          sx={{
            borderRadius: "12px",
            marginTop: "2rem",
            p: "3rem",
            display: "flex",
            flexDirection: "column",
            // height: "54px",
            // alignItems: "center",
            // width: 1100,
            // marginLeft: "30px",
            gap: "1.5rem",
            backgroundColor: "white",
          }}
        >
          <Typography
            variant="h6"
            style={{
              marginRight: 2,
              fontFamily: "Poppins",
              fontWeight: "500",
              color: "#84342D",
              textDecoration: "none",
              float: "left",
            }}
          >
            CasaGrandae Apple Park
          </Typography>
          <Paper
            sx={{
              background: "#f6c290",
              //   height: "5rem",
              //   width: "40rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: ".5rem 1rem 1rem 1rem",
              gap: "1rem",
            }}
          >
            <TextField
              variant="outlined"
              sx={TextFieldStyle}
              style={{
                width: "250px",
                borderRadius: "100px",
                backgroundColor: "#ffffff00",
              }}
              id="outlined-select-type"
              select
              defaultValue="Block"
            >
              {propertyType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              placeholder="Search"
              id="outlined-basic"
              variant="outlined"
              style={{
                width: "37rem",
                borderRadius: "100px",
                backgroundColor: "#ffffff00",
              }}
              sx={TextFieldStyle}
            />
            <Button
              sx={{
                padding: "8px",
                mt: "6px",
                borderRadius: "10px",
                fontSize: "12px",
                color: theme.palette.info.main,
                backgroundColor: theme.palette.primary.main,
              }}
            >
              <DeleteForeverIcon sx={{ fontSize: "20px" }} />
              Clear
            </Button>
          </Paper>
          <PropertyDataGrid />
        </Paper>
      </Box>
    </>
  );
};

export default PropertyDataElements;
