import { Avatar, Paper, TextField, Typography } from "@material-ui/core";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useTheme } from "@material-ui/core";
import React from "react";
import { Box } from "@mui/material";
import PropertyFormCom from "./PropertyFormCom";

const PropertyForm = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "7rem",
          justifyContent: "center",
          alignItems: "start",
          paddingTop: "3rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "4rem",
          }}
        >
          <Avatar
            style={{
              backgroundColor: theme.palette.secondary.main,
              width: 56,
              height: 56,
            }}
          >
            <HomeOutlinedIcon
              style={{
                color: theme.palette.primary.main,
                width: 45,
                height: 45,
              }}
            />
          </Avatar>

          <Typography
            variant="h6"
            style={{
              fontFamily: "Poppins",
              fontWeight: "500",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Property Information
          </Typography>
        </Box>
        <PropertyFormCom />
      </Box>
    </>
  );
};

export default PropertyForm;