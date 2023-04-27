import React from "react";
import { Box, MenuItem, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import PropertyDataGrid from "./PropertyDataGrid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { PropertyDataLogics } from "../Utils/PropertyDataGridLogics";
type Props = {};

const PropertyDataElements = (props: Props) => {
  const theme = useTheme();
  const { block, handleFilterChange, blockType, search, setSearch } =
    PropertyDataLogics();
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
      <Box>
        <Paper
          sx={{
            borderRadius: "12px",
            marginTop: "2rem",
            p: "3rem",
            display: "flex",
            flexDirection: "column",
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
              name="block"
              value={block}
              onChange={(e) =>
                handleFilterChange(e.target.name, e.target.value)
              }
            >
              <MenuItem value="All">All</MenuItem>
              {blockType.map((type: string) => (
                <MenuItem key={type} value={type}>
                  {type}
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
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
