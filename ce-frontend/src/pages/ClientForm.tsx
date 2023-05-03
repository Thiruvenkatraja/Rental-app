import {
  Avatar,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useTheme } from "@mui/material";
import React from "react";
import { Box, Grid } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ClientFormCom from "../components/ClientFormCom";
import SnackBar from "../components/SnakeBar";
const ClientForm = () => {
const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "7rem",
          justifyContent: "center",
          alignItems: "start",
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
          <Grid
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
              <PersonIcon
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
              Clien Information
            </Typography>
          </Grid>
          <Grid
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
              <PersonIcon
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
          </Grid>
        </Box>
        <ClientFormCom />
      </Box>
      <SnackBar />
    </>
  );
};

export default ClientForm;
