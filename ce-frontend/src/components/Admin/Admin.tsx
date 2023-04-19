import React from "react";
import Box from "@mui/material/Box";
import { MenuItem, Typography, useTheme } from "@material-ui/core";
import { Button, Chip, Divider, Grid, IconButton, Pagination, Stack, TextField } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Paper from "@mui/material/Paper";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import InputBase from "@mui/material/InputBase";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import { Property ,properties } from "../Utils/Constants";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

export const Admin = () => {
  const theme = useTheme();
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

   const [searchTerm, setSearchTerm] = React.useState("");
   const [visibleProperties, setVisibleProperties] = React.useState<Property[]>(
     properties
   );
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = Math.ceil( properties.length / 8);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * 8;
  const visibleImages = visibleProperties.slice(startIndex, startIndex + 8);
const [isSearchClicked, setIsSearchClicked] = React.useState(false);

const handleSearchClick = () => {
  setIsSearchClicked(true);
};


  React.useEffect(() => {
    setVisibleProperties(visibleImages);
  }, [visibleImages]);

 React.useEffect(() => {
   if (isSearchClicked) {
     const filteredProperties = properties.filter(
       (property) =>
         property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         property.address.toLowerCase().includes(searchTerm.toLowerCase())
     );
     setVisibleProperties(filteredProperties);
     setIsSearchClicked(false);
   }
 }, [searchTerm, isSearchClicked]);
 const handleClearClick = () => {
   // clear the search term and reset visibleProperties
   setSearchTerm("");
   setVisibleProperties(properties);
   setIsSearchClicked(false);
 };

  return (
    <>
      <Box
        sx={{
          "& .MuiOutlinedInput-root": {
            border: "none",
            outline: "none",
            borderRadius: "12px",
            height: "54px",
            boxShadow: `0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)`,
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          },
          "& .MuiInputBase-input": {
            backgroundColor: "none",
          },
          "& .MuiTextField-root": {
            backgroundColor: "#F6F6F6",
            width: "30ch",
          },
          display: "flex",
          flexDirection: "row",
          height: 60,
          alignItems: "center",
          justifyContent: "flex-start",
          margin: "30px auto",
          width: "92%",
        }}
      >
        <Typography
          variant="h6"
          style={{
            marginRight: 2,
            fontFamily: "Poppins",
            fontWeight: "500",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Properties
        </Typography>
        <Button
          sx={{
            height: "31px",
            width: "88px",
            "&:hover": {
              backgroundColor: theme.palette.secondary.main,
            },
            boxShadow: `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`,
            margin: "12px",
            borderRadius: "12px",
            fontFamily: "Poppins",
            fontSize: "12px",
            textTransform: "none",
            color: theme.palette.info.main,
            backgroundColor: theme.palette.secondary.main,
          }}
          startIcon={<AddOutlinedIcon />}
        >
          ADD
        </Button>
        <Paper
          component="form"
          sx={{
            borderRadius: "12px",
            p: "2px 4px",
            display: "flex",
            height: "54px",
            alignItems: "center",
            width: 600,
            marginLeft: "30px",
            backgroundColor: "#F6F6F6",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <Button
            sx={{
              height: "31px",
              width: "91px",
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
              },
              boxShadow: `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`,
              margin: "12px",
              borderRadius: "12px",
              fontFamily: "Poppins",
              textTransform: "none",
              color: theme.palette.info.main,
              backgroundColor: theme.palette.primary.main,
            }}
            onClick={handleSearchClick}
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
          <IconButton
            sx={{
              color: theme.palette.primary.main,
            }}
            onClick={handleClearClick}
          >
            <ClearOutlinedIcon />
          </IconButton>
        </Paper>

        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FmdGoodOutlinedIcon />
              </InputAdornment>
            ),
          }}
          sx={{ marginLeft: "30px" }}
          id="outlined-select-currency"
          select
          defaultValue="USD"
          label="Location"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HomeOutlinedIcon />
              </InputAdornment>
            ),
          }}
          sx={{ marginLeft: "30px" }}
          id="outlined-select-currency"
          select
          defaultValue="USD"
          label="Property"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          margin: "30px auto",
          width: "87%",
          // backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Grid container spacing={2}>
          {visibleProperties.map((card, idx) => (
            <Grid item key={idx} xs={3}>
              <Paper
                sx={{
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  m: 2,
                  borderRadius: "12px",
                  flexDirection: "column",
                  display: "flex",
                  alignItems: "flex-start",
                  width: "250px",
                  height: "280px",
                  marginLeft: "30px",
                }}
              >
                <img
                  src={card.url}
                  alt="Your Image"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "250px",
                    borderTopRightRadius: "12px",
                    borderTopLeftRadius: "12px",
                    verticalAlign: "top",
                  }}
                />
                <Typography
                  variant="h6"
                  style={{
                    marginTop: 20,
                    marginLeft: 20,
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    letterSpacing: "0.10000000149011612px",
                    textAlign: "left",
                  }}
                >
                  {card.name}
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: 20,
                    fontFamily: "Poppins",
                    fontSize: "smaller",
                    fontWeight: 500,
                    lineHeight: "24px",
                    letterSpacing: "0.10000000149011612px",
                    textAlign: "left",
                    opacity: "40%",
                  }}
                >
                  <FmdGoodOutlinedIcon sx={{ mr: 1, fontSize: "small" }} />
                  {card.address}
                </Typography>

                <Divider
                  variant="middle"
                  sx={{ width: "200px", marginTop: "10px" }}
                />
                <Stack direction="row" padding={1.5} spacing={1}>
                  <Chip
                    sx={{
                      padding: "3px",
                      height: "28px",
                      fontSize: "small",
                      color: theme.palette.info.main,
                      backgroundColor: theme.palette.primary.main,
                    }}
                    icon={
                      <HomeOutlinedIcon
                        color="primary"
                        sx={{
                          color: theme.palette.info.main,
                          fontSize: "medium",
                        }}
                      />
                    }
                    label="121"
                    variant="filled"
                  />
                  <Chip
                    sx={{
                      fontSize: "small",
                      padding: "3px",
                      height: "28px",
                      color: theme.palette.info.main,
                      backgroundColor: theme.palette.primary.main,
                    }}
                    icon={
                      <Groups2OutlinedIcon
                        color="primary"
                        sx={{
                          color: theme.palette.info.main,
                          fontSize: "medium",
                        }}
                      />
                    }
                    label="100"
                    variant="filled"
                  />

                  <IconButton
                    size="small"
                    aria-label="edit"
                    sx={{
                      color: theme.palette.primary.main,
                      backgroundColor: theme.palette.secondary.main,
                    }}
                  >
                    <EditOutlinedIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    aria-label="delete"
                    sx={{
                      color: theme.palette.primary.main,
                      backgroundColor: theme.palette.secondary.main,
                    }}
                  >
                    <DeleteOutlinedIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {totalPages > 1 && (
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            sx={{
              marginTop: "36px",
              ".Mui-selected": {
                color: theme.palette.primary.main,
                bgcolor: `#F6C290 !important`,
              },
            }}
          />
        )}
      </Box>
    </>
  );
};
