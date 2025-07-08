import React, { useState } from "react";
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
  const userName = localStorage.getItem("loggedInName") || "Guest";
  const navigate = useNavigate();

  const navLinks = [
    { label: "About", icon: <InfoIcon />, to: "/about" },
    { label: "Adopt", icon: <FavoriteIcon />, to: "/adopt" },
    { label: "Donate", icon: <VolunteerActivismIcon />, to: "/donate" },
  ];

  const handleSignOut = () => {
    localStorage.removeItem("loggedInEmail");
    if (onSignOut) onSignOut();
    navigate("/login");
  };

  return (
    <Box
      component="header"
      sx={{
        width: "100vw",
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 100,
        backgroundColor: "white",
        // Remove borderRadius or any border styling here
        boxShadow: "0 4px 24px -4px rgba(0,0,0,0.13)", // keep shadow for separation if desired
        minHeight: 72,
        display: "flex",
        alignItems: "center",
        px: { xs: 2, md: 8 },
        py: 0,
      }}
    >
      {/* Logo and Brand */}
      <Box
        component={Link}
        to="/"
        sx={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          cursor: "pointer",
          mr: 4,
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="App Logo"
          sx={{
            width: 44,
            height: 44,
            borderRadius: 2,
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

      {/* Navigation Links */}
      {!isMobile && (
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
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
                px: 3,
                mx: 1,
                fontSize: "1rem",
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      )}

      {/* User Info & Actions */}
      <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
        <Typography sx={{ fontWeight: "bold", color: "#15803d", mr: 2 }}>
          Hi, {userName}
        </Typography>
        <Button
          variant="contained"
          color="error"
          startIcon={<LogoutIcon />}
          onClick={handleSignOut}
          sx={{
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
        {/* Hamburger for mobile */}
        {isMobile && (
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
        )}
      </Box>
    </Box>
  );
}
