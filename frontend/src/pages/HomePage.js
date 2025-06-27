import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@mui/material";
import { Link } from "react-router-dom";
import dog1 from "../assets/dog1.jpg";
import dog2 from "../assets/dog2.jpg";
import main from "../assets/main.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {
  const [shelterCount, setShelterCount] = useState(null);

  useEffect(() => {
    // Fetch animals and set the count
    fetch("https://bliss-foundation.onrender.com/api/animals")
      .then(res => res.json())
      .then(data => setShelterCount(Array.isArray(data) ? data.length : 0))
      .catch(() => setShelterCount(0));
  }, []);

  const impactStats = [
    { label: "Dogs Rescued", value: 120 },
    { label: "Dogs Adopted", value: 95 },
    { label: "Currently in Shelter", value: shelterCount !== null ? shelterCount : "..." },
    { label: "Fostered", value: 10 }
  ];

  return (
    <Box
      sx={{
        backgroundColor: "white",
        color: "#4B5563",
        minHeight: "100vh",
        px: 4,
        py: 6
      }}
    >
      <Header />

      {/* Hero Section */}
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: "1200px", mx: "auto", mb: 8 }}
      >
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={main}
            alt="Happy Pets"
            sx={{ width: "100%", borderRadius: 4 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: "#15803d", mb: 2, textAlign: "center" }}
            >
              Find Your New Best Friend
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.125rem", color: "#6B7280", mb: 3, textAlign: "center" }}
            >
              Search through hundreds of pets and bring home a companion that
              brings joy to your life.
            </Typography>
            <Button
              component={Link}
              to="/adopt"
              variant="contained"
              sx={{
                backgroundColor: "#15803d",
                color: "white",
                px: 5,
                py: 1.75,
                borderRadius: "9999px",
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "#166534"
                }
              }}
            >
              View Available Pets
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Main Container for Cards and Dashboard */}
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 2 }}>
        {/* Info Cards Section */}
        <Grid 
          container 
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item xs={12} md={6}>
            <Link to="/adopt" style={{ textDecoration: "none", display: "block", height: "100%" }}>
              <Card
                sx={{
                  height: "100%",
                  boxShadow: 3,
                  borderRadius: 3,
                  cursor: "pointer",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={dog1}
                  alt="Search"
                  sx={{
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    objectFit: "cover"
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#15803d", mb: 1 }}
                  >
                    Easy Search
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Quickly filter pets by location, age, breed, and more to find
                    your perfect match.
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>

          <Grid item xs={12} md={6}>
            <Link to="/how-adoption-works" style={{ textDecoration: "none", display: "block", height: "100%" }}>
              <Card
                sx={{
                  height: "100%",
                  boxShadow: 3,
                  borderRadius: 3,
                  cursor: "pointer",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={dog2}
                  alt="How it works"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#15803d", mb: 1 }}
                  >
                    How Adoption Works
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Learn more about the adoption process and how we help pets
                    find loving homes.
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>

        {/* Dashboard Section */}
        <Box sx={{ width: "100%", mt: 8, mb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              color: "#15803d",
              fontWeight: "bold",
              textAlign: "center",
              mb: 4
            }}
          >
            Our Impact
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {impactStats.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    backgroundColor: "#f0fdf4",
                    borderRadius: 3,
                    boxShadow: 2,
                    p: 3,
                    textAlign: "center",
                    transition: "transform 0.2s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: 4
                    }
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ color: "#15803d", fontWeight: "bold", mb: 1 }}
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "#4B5563" }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}