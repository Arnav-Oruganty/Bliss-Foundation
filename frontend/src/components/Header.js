import React from "react";
import { Box, Button, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

// Example: get user name from props, context, or localStorage
const userName = localStorage.getItem("userName") || "Guest";

export default function Header({ onSignOut }) {
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1200px",
        mx: "auto",
        mb: 6,
        px: 2
      }}
    >
      <Box
        component={Link}
        to="/"
        sx={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          cursor: "pointer"
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="App Logo"
          sx={{
            width: 40,
            height: 40,
            borderRadius: 1,
            mr: 2,
            objectFit: "cover"
          }}
        />
        <Typography
          variant="h5"
          sx={{ color: "#16a34a", fontWeight: "bold", letterSpacing: 1 }}
        >
          Bliss Foundation
        </Typography>
      </Box>
      <Box
        component="nav"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2
        }}
      >
        <Typography sx={{ fontWeight: "bold", color: "#15803d", mr: 3 }}>
          Hi, {userName}
        </Typography>
        <Button
          startIcon={<InfoIcon />}
          component={Link}
          to="/about"
          sx={{
            color: "#6B7280",
            textTransform: "none",
            fontWeight: "bold",
            px: 2
          }}
        >
          About
        </Button>
        <Button
          startIcon={<FavoriteIcon />}
          component={Link}
          to="/adopt"
          sx={{
            color: "#6B7280",
            textTransform: "none",
            fontWeight: "bold",
            px: 2
          }}
        >
          Adopt
        </Button>
        <Button
          startIcon={<VolunteerActivismIcon />}
          component={Link}
          to="/donate"
          sx={{
            color: "#6B7280",
            textTransform: "none",
            fontWeight: "bold",
            px: 2
          }}
        >
          Donate
        </Button>
        <Button
          variant="contained"
          color="error"
          startIcon={<LogoutIcon />}
          onClick={onSignOut}
          sx={{
            ml: 2,
            borderRadius: "9999px",
            textTransform: "none",
            fontWeight: "bold",
            px: 3,
            boxShadow: 2,
            letterSpacing: 1
          }}
        >
          Sign Out
        </Button>
      </Box>
    </Box>
  );
}