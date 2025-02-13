import { Avatar, Button, Paper, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import SnackBar from "../components/SnakeBar";
import AddUserFormCom from "../components/SuperAdmin/AddUserFormCom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const AddUserForm = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "7rem",
          justifyContent: "center",
          alignItems: "start",
          //   paddingTop: "3rem",
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
            <AccountCircleIcon
              style={{
                color: theme.palette.primary.main,
                width: 40,
                height: 40,
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
            Manager Details
          </Typography>
        </Box>
        <AddUserFormCom />
      </Box>
      <SnackBar
        message={"Request submitted succesfully!"}
        duration={1000}
        navigate={-1}
      />
    </>
  );
};

export default AddUserForm;
