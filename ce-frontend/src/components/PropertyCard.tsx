import React from "react";
import { Link } from "react-router-dom";
import {
  Chip,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useTheme } from "@mui/material";
import { AdminLogics } from "../Utils/AdminLogics";


type PropertyCardProps = {
  idx: number;
  card: {
    Property_ID:number;
    Property_ImgURL: string;
    PropertyTitle: string;
    Property_Address: string;
  };
};

export const PropertyCard = ({ idx, card }: PropertyCardProps) => {
  const theme = useTheme()
  return (
    <Link to={`/properties_data/${card.Property_ID}/${card.PropertyTitle}`} style={{ textDecoration: "none" }}>
      <Paper
        sx={{
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.05)",
          },
          borderRadius: "12px",
          flexDirection: "column",
          display: "flex",
          alignItems: "flex-start",
          width: "17rem",
          height: "18rem",
          //   overflow: "hidden",
        }}
      >
        <img
          style={{
            transition: "transform 0.2s",
            maxWidth: "100%",
            maxHeight: "250px",
            borderTopRightRadius: "12px",
            borderTopLeftRadius: "12px",
            verticalAlign: "top",
          }}
          src={card.Property_ImgURL}
          alt="Your Image"
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
            textAlign: "left",
          }}
        >
          {card.PropertyTitle}
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
            textAlign: "left",
            opacity: "40%",
          }}
        >
          <FmdGoodOutlinedIcon sx={{ mr: 1, fontSize: "small" }} />
          {card.Property_Address}
        </Typography>

        <Divider variant="middle" sx={{ width: "200px", marginTop: "10px" }} />
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
    </Link>
  );
};
