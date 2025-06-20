import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import logo from "../assets/logo.jpeg";

export default function Header({ onSignOut }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userName, setUserName] = useState("Guest");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const loggedInEmail = JSON.parse(localStorage.getItem("loggedInEmail"));
        if (!loggedInEmail) return;

        const response = await fetch("https://bliss-foundation.onrender.com/api/auth/signup");
        const data = await response.json();

        const user = data.find((u) => u.email === loggedInEmail);
        if (user) {
          setUserName(user.name);
        }
      } catch (error) {
        console.error("Error fetching user name:", error);
      }
    };

    fetchUserName();
  }, []);

  const navLinks = [
    { label: "About", icon: <InfoIcon />, to: "/about" },
    { label: "Adopt", icon: <FavoriteIcon />, to: "/adopt" },
    { label: "Donate", icon: <VolunteerActivismIcon />, to: "/donate" },
  ];

  const handleSignOut = () => {
    localStorage.removeItem("loggedInEmail"); // Optional
    if (onSignOut) onSignOut();
    navigate("/login");
  };

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
        px: 2,
      }}
    >
      <Box
        component={Link}
        to="/"
        sx={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          cursor: "pointer",
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
            objectFit: "cover",
          }}
        />
        <Typography
          variant="h5"
          sx={{ color: "#16a34a", fontWeight: "bold", letterSpacing: 1 }}
        >
          Bliss Foundation
        </Typography>
      </Box>
      {isMobile ? (
        <>
          <IconButton onClick={() => setDrawerOpen(true)} sx={{ ml: 1 }}>
            <MenuIcon sx={{ color: "#15803d" }} />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <Box sx={{ width: 220, p: 2 }}>
              <Typography
                sx={{ fontWeight: "bold", color: "#15803d", mb: 2 }}
              >
                Hi, {userName}
              </Typography>
              <List>
                {navLinks.map((item) => (
                  <ListItem
                    button
                    component={Link}
                    to={item.to}
                    key={item.label}
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                      color: "#6B7280",
                      textDecoration: "none",
                    }}
                  >
                    {item.icon}
                    <ListItemText primary={item.label} sx={{ ml: 1 }} />
                  </ListItem>
                ))}
                <ListItem button onClick={handleSignOut}>
                  <LogoutIcon color="error" />
                  <ListItemText
                    primary="Sign Out"
                    sx={{ ml: 1, color: "#d32f2f" }}
                  />
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </>
      ) : (
        <Box
          component="nav"
          sx={{ display: "flex", alignItems: "center", gap: 2 }}
        >
          <Typography sx={{ fontWeight: "bold", color: "#15803d", mr: 3 }}>
            Hi, {userName}
          </Typography>
          {navLinks.map((item) => (
            <Button
              key={item.label}
              startIcon={item.icon}
              component={Link}
              to={item.to}
              sx={{
                color: "#6B7280",
                textTransform: "none",
                fontWeight: "bold",
                px: 2,
              }}
            >
              {item.label}
            </Button>
          ))}
          <Button
            variant="contained"
            color="error"
            startIcon={<LogoutIcon />}
            onClick={handleSignOut}
            sx={{
              ml: 2,
              borderRadius: "9999px",
              textTransform: "none",
              fontWeight: "bold",
              px: 3,
              boxShadow: 2,
              letterSpacing: 1,
            }}
          >
            Sign Out
          </Button>
        </Box>
      )}
    </Box>
  );
}
