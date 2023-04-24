import React from "react";
import Box from "@mui/material/Box";
import { InputLabel, MenuItem, Typography, useTheme } from "@material-ui/core";
import {
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  Pagination,
  Stack,
  TextField,
} from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import InputBase from "@mui/material/InputBase";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Property,
  properties,
  getUniqueValuesFromArray,
} from "../Utils/Constants";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { PropertyCard } from "../Utils/PropertyCard";
import { StyledBox } from "../Utils/StyledBox";

export const Admin = () => {
  
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [visibleProperties, setVisibleProperties] =
    React.useState<Property[]>(properties);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 8;
  const [selectedCity, setSelectedCity] = React.useState<string>("All");
  const [propertyType, setPropertyType] = React.useState<string>("All");
  const types = getUniqueValuesFromArray(properties, "type");
  const cities = getUniqueValuesFromArray(properties, "city");
  // Filter Logic
  const filteredProperties = React.useMemo(() => {
    let filtered = properties.filter(
      (property) =>
        property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (propertyType !== "All") {
      filtered = filtered.filter((property) => property.type === propertyType);
    }
    if (selectedCity !== "All") {
      filtered = filtered.filter((property) => property.city === selectedCity);
    }
    return filtered;
  }, [properties, searchTerm, propertyType, selectedCity]);
  
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visible = filteredProperties.slice(startIndex, endIndex);

  React.useEffect(() => {
    setVisibleProperties(visible);
  }, [visible]);

  const handleFilterChange = (key: string, value: string) => {
    if (key === "city") {
      setSelectedCity(value);
    } else if (key === "type") {
      setPropertyType(value);
    }
    setCurrentPage(1);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const handleClearClick = () => {
    // clear the search term and reset visibleProperties
    setSearchTerm("");
    setPropertyType("All");
    setSelectedCity("All");
    setCurrentPage(1);
    setVisibleProperties(properties);
  };

  return (
    <>
      <StyledBox>
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

          <IconButton
            disabled={!searchTerm}
            sx={{
              color: theme.palette.primary.main,
            }}
            onClick={handleClearClick}
          >
            <ClearOutlinedIcon />
          </IconButton>
        </Paper>

        <TextField
          sx={{
            marginLeft: "30px",
            backgroundColor: theme.palette.primary.main,
          }}
          color="secondary"
          id="location-filter"
          label="Location"
          name="city"
          select
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FmdGoodOutlinedIcon />
              </InputAdornment>
            ),
          }}
          value={selectedCity}
          onChange={(e) => handleFilterChange(e.target.name, e.target.value)}
          defaultValue="All"
        >
          <MenuItem value="All">All</MenuItem>
          {cities.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          sx={{ marginLeft: "30px" }}
          id="property-type-filter"
          label="Property"
          name="type"
          select
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HomeOutlinedIcon />
              </InputAdornment>
            ),
          }}
          value={propertyType}
          onChange={(e) => handleFilterChange(e.target.name, e.target.value)}
          defaultValue="All"
        >
          <MenuItem value="All">All</MenuItem>
          {types.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
      </StyledBox>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          margin: "30px auto",
          width: "87%",
        }}
      >
        <Grid container spacing={2}>
          {visibleProperties.map((card, idx) => (
            <Grid item key={idx} xs={3}>
              <PropertyCard card={card} idx={idx} />
            </Grid>
          ))}
        </Grid>

        {totalPages > 1 && (
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
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
