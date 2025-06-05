import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        pt: 6,
        pb: 4,
        backgroundColor: "#f9fafb",
        color: "#6b7280"
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 2 }}>
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#15803d", mb: 1 }}
            >
              Bliss Foundation
            </Typography>
            <Typography variant="body2">
              Helping homeless dogs find loving homes. Join us in making a
              difference.
            </Typography>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", mb: 1 }}
            >
              Quick Links
            </Typography>
            <Typography
              variant="body2"
              component={Link}
              to="/about"
              sx={{
                display: "block",
                color: "inherit",
                textDecoration: "none",
                mb: 0.5
              }}
            >
              About
            </Typography>
            <Typography
              variant="body2"
              component={Link}
              to="/adopt"
              sx={{
                display: "block",
                color: "inherit",
                textDecoration: "none",
                mb: 0.5
              }}
            >
              Adopt
            </Typography>
            <Typography
              variant="body2"
              component="a"
              href="/donate"
              sx={{
                display: "block",
                color: "inherit",
                textDecoration: "none",
                mb: 0.5
              }}
            >
              Donate
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", mb: 1 }}
            >
              Contact Us
            </Typography>
            <Typography variant="body2">
              H, No: 1-60/8/6/E-1,
              <br />
              Rolling Stones Society, Gachibowli ,
              <br />
              Telangana - 32
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Phone: +91 91105 78329
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", mb: 1 }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/ios-filled/24/4b5563/facebook--v1.png"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/blissforanimals/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/ios-filled/24/4b5563/instagram-new.png"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/ios-filled/24/4b5563/twitter.png"
                  alt="Twitter"
                />
              </a>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, borderTop: "1px solid #e5e7eb", pt: 3 }}>
          <Typography variant="body2" align="center">
            © 2025 Bliss Foundation. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}