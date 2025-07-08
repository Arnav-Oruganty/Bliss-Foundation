import React from "react";
import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <>
      <Header />

      {/* About Us Content */}
      <Box sx={{ maxWidth: "900px", mx: "auto", mb: 10, mt: 4 }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", color: "#15803d", mb: 3, textAlign: "center" }}
        >
          About Bliss Foundation
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.15rem", color: "#6B7280", mb: 4, textAlign: "center" }}
        >
          Bliss Foundation is dedicated to rescuing, rehabilitating, and rehoming homeless and abandoned dogs. 
          Our mission is to create a compassionate community where every animal is valued and cared for. 
          Since our inception, we have helped hundreds of dogs find loving families and continue to work tirelessly to make a difference in their lives.
        </Typography>

        <Typography
          variant="h4"
          sx={{ color: "#15803d", fontWeight: "bold", mb: 2, mt: 6 }}
        >
          Aims and Objectives
        </Typography>
        <List sx={{ mb: 4 }}>
          <ListItem>
            <ListItemText
              primary="a) Provide a shelter for permanently disabled stray animals so they can too experience love and warmth."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="b) Address the stray animal population using technology in the solution."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="c) Promote veganism by spreading awareness about animal cruelty and exploitation to youth and students so the future generation has all the information to make ethical choices."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="d) Fight animal cruelty by enabling common people to pursue cases of abuse and cruelty easily so justice is served to the needy."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="e) To do any other activity which trust needs to do to achieve the objectives of the trust."
            />
          </ListItem>
        </List>

        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Typography variant="h4" sx={{ color: "#15803d", fontWeight: "bold", mb: 1 }}>
            Join Us in Making a Difference!
          </Typography>
          <Typography variant="body1" sx={{ color: "#6B7280", mb: 2 }}>
            Whether you adopt, foster, volunteer, or donate, your support helps us save more lives.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/"
            sx={{
              backgroundColor: "#15803d",
              color: "white",
              px: 5,
              py: 1.5,
              borderRadius: "9999px",
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "#166534"
              },
              mb: 2
            }}
          >
            Back to Home
          </Button>
        </Box>
      </Box>

      <Footer />
    </>
  );
}