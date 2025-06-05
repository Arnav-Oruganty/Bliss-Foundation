import React from "react";
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HowAdoptionWorks() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        color: "#4B5563",
        minHeight: "100vh",
        px: 4,
        py: 6,
      }}
    >
      <Header />

      <Box sx={{ maxWidth: 700, mx: "auto", mt: 6, mb: 8 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#15803d",
              mb: 2,
              textAlign: "center",
            }}
          >
            How Adoption Works
          </Typography>
          <Typography sx={{ mb: 3, textAlign: "center" }}>
            Adopting a pet from Bliss Foundation is a simple and rewarding process. Here’s how it works:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <PetsIcon color="success" />
              </ListItemIcon>
              <ListItemText
                primary="1. Browse Available Animals"
                secondary="Explore our list of animals available for adoption and find your perfect companion."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PetsIcon color="success" />
              </ListItemIcon>
              <ListItemText
                primary="2. Express Your Interest"
                secondary="Click 'Adopt Me' on the animal’s card and fill out a short interest form."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PetsIcon color="success" />
              </ListItemIcon>
              <ListItemText
                primary="3. Meet & Greet"
                secondary="Our team will contact you to schedule a meeting with the animal, either virtually or in person."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PetsIcon color="success" />
              </ListItemIcon>
              <ListItemText
                primary="4. Home Check & Guidance"
                secondary="We may conduct a brief home check and provide guidance to ensure a safe environment for your new pet."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PetsIcon color="success" />
              </ListItemIcon>
              <ListItemText
                primary="5. Finalize Adoption"
                secondary="Once approved, complete the adoption paperwork and welcome your new family member home!"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PetsIcon color="success" />
              </ListItemIcon>
              <ListItemText
                primary="6. Ongoing Support"
                secondary="We offer post-adoption support to help you and your pet adjust and thrive together."
              />
            </ListItem>
          </List>
          <Typography sx={{ mt: 3, textAlign: "center", color: "#15803d", fontWeight: "bold" }}>
            Thank you for choosing to adopt and give an animal a loving home!
          </Typography>
        </Paper>
      </Box>

      <Footer />
    </Box>
  );
}