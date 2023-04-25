import React from "react";
import { Box, TextField } from "@mui/material";
import { Typography, useTheme } from "@material-ui/core";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import PropertyDataGrid from "./PropertyDataGrid";

type Props = {};

const PropertyDataElements = (props: Props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          margin: "30px auto",
          width: "87%",
          padding:"5rem",
          marginTop: "90vh",
          marginLeft: "-10vw"
          // backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Paper
          sx={{
            borderRadius: "12px",
            marginTop: "2rem",
            p: "1rem",
            display: "flex",
            flexDirection: "column",
            // height: "54px",
            alignItems: "center",
            // width: 600,
            // marginLeft: "30px",
            backgroundColor: "#F6F6F6",
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
            }}
          >
            CasaGrandae Apple Park
          </Typography>
          <Paper
            sx={{
              background: "#F6C290",
              // height:"5rem",
              // width:"20rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
              gap: "1rem",
            }}
          >
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  boxShadow: "none",
                  borderRadius: "2rem",
                },
                "& .css-upc15f-MuiFormControl-root-MuiTextField-root": {
                  backgroundColor: "#F6C290",
                  borderRadius: "5rem",
                },
                // "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":{
                //     background:'white'
                // }
              }}
              //   id="outlined-select-currency"
              //   select
              //   defaultValue="All"
              label="Block"
              //   value={selectedCity}
              //   name="city"
              //   onChange={(e) => handleFilterChange(e.target.name, e.target.value)}
            ></TextField>
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  boxShadow: "none",
                  borderRadius: "2rem",
                },
                "& .css-upc15f-MuiFormControl-root-MuiTextField-root": {
                  backgroundColor: "#F6C290",
                  borderRadius: "5rem",
                },
                // "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":{
                //     background:'white'
                // }
              }}
              //   id="outlined-select-currency"
              //   select
              //   defaultValue="All"
              label="Search"
              //   value={selectedCity}
              //   name="city"
              //   onChange={(e) => handleFilterChange(e.target.name, e.target.value)}
            ></TextField>
          </Paper>
          <PropertyDataGrid />
        </Paper>
      </Box>
    </>
  );
};

export default PropertyDataElements;
