// File: src/pages/HomePage.jsx
import React from "react";
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import FavoriteIcon from '@mui/icons-material/Favorite';  
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

import dog1 from '../assets/dog1.jpg';
import dog2 from '../assets/dog2.jpg';
import main from '../assets/main.jpg';
import logo from '../assets/logo.jpeg'

export default function HomePage() {
  return (
    <Box sx={{ backgroundColor: 'white', color: '#4B5563', minHeight: '100vh', px: 4, py: 6 }}>
      
      {/* Header */}
      <Box
        component="header"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          mx: 'auto',
          mb: 6
        }}
      >
        <Box sx ={{ display: 'flex', alignItems: 'center '}}>
            <Box
            component="img"
            src={logo}
            alt="App Logo"
            sx={{
              width: 40,
              height: 40,
              borderRadius: 1,
              mr: 2,
              objectFit: 'cover',
            }}
          />
            <Typography variant="h5" sx={{ color: '#16a34a', fontWeight: 'bold' }}>
          Bliss Foundation
        </Typography>
        </Box>
        <Box component="nav">
          <Button startIcon={<InfoIcon />} href="#about" sx={{ color: '#6B7280', textTransform: 'none', mr: 2 }}>
            About
          </Button>
          <Button startIcon={<FavoriteIcon />} href="#adopt" sx={{ color: '#6B7280', textTransform: 'none', mr: 2 }}>
            Adopt
        </Button>

        <Button startIcon={<VolunteerActivismIcon />} href="#donate" sx={{ color: '#6B7280', textTransform: 'none', mr: 2 }}>
        Donate
        </Button>
          <Button startIcon={<ContactPhoneIcon />} href="#contact" sx={{ color: '#6B7280', textTransform: 'none' }}>
            Contact
          </Button>
        </Box>
      </Box>

      {/* Hero Section */}
      <Grid container spacing={6} alignItems="center" justifyContent="center" sx={{ maxWidth: '1200px', mx: 'auto', mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={main}
            alt="Happy Pets"
            sx={{ width: '100%', borderRadius: 4 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#15803d', mb: 2 }}>
            Find Your New Best Friend
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', color: '#6B7280', mb: 3 }}>
            Search through hundreds of pets and bring home a companion that brings joy to your life.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#15803d',
              color: 'white',
              px: 5,
              py: 1.75,
              borderRadius: '9999px',
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: '#166534'
              }
            }}
          >
            View Available Pets
          </Button>
        </Grid>
      </Grid>

      {/* Main Container for Cards and Dashboard */}
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
        
        {/* Info Cards Section */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 3 }}>
              <CardMedia
                component="img"
                height="240"
                image={dog1}
                alt="Search"
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#15803d', mb: 1 }}>
                  Easy Search
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Quickly filter pets by location, age, breed, and more to find your perfect match.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 3 }}>
              <CardMedia
                component="img"
                height="240"
                image={dog2}
                alt="How it works"
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#15803d', mb: 1 }}>
                  How Adoption Works
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Learn more about the adoption process and how we help pets find loving homes.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Dashboard Section */}
        <Box sx={{ width: '100%', mt: 8, mb: 6 }}>
          <Typography variant="h5" sx={{ color: '#15803d', fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
            Our Impact
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {[
              { label: 'Dogs Rescued', value: 120 },
              { label: 'Dogs Adopted', value: 95 },
              { label: 'Currently in Shelter', value: 15 },
              { label: 'Fostered', value: 10 }
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    backgroundColor: '#f0fdf4',
                    borderRadius: 3,
                    boxShadow: 2,
                    p: 3,
                    textAlign: 'center',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: 4,
                    },
                  }}
                >
                  <Typography variant="h4" sx={{ color: '#15803d', fontWeight: 'bold', mb: 1 }}>
                    {item.value}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: '#4B5563' }}>
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Footer */}
        <Box
        component="footer"
        sx={{
            mt: 8,
            pt: 6,
            pb: 4,
            backgroundColor: '#f9fafb',
            color: '#6b7280'
        }}
        >
        <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
            {/* Footer Top Section */}
            <Grid container spacing={4} justifyContent="space-between">
            <Grid item xs={12} md={4}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#15803d', mb: 1 }}>
                Bliss Foundation
                </Typography>
                <Typography variant="body2">
                Helping homeless dogs find loving homes. Join us in making a difference.
                </Typography>
            </Grid>

            <Grid item xs={6} md={2}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                Quick Links
                </Typography>
                <Typography variant="body2" component="a" href="#about" sx={{ display: 'block', color: 'inherit', textDecoration: 'none', mb: 0.5 }}>
                About
                </Typography>
                <Typography variant="body2" component="a" href="#contact" sx={{ display: 'block', color: 'inherit', textDecoration: 'none', mb: 0.5}}>
                Adopt
                </Typography>
                <Typography variant="body2" component="a" href="#contact" sx={{ display: 'block', color: 'inherit', textDecoration: 'none', mb: 0.5 }}>
                Donate
                </Typography>
                <Typography variant="body2" component="a" href="#contact" sx={{ display: 'block', color: 'inherit', textDecoration: 'none', mb: 0.5 }}>
                Contact
                </Typography>
            </Grid>

            <Grid item xs={6} md={3}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                Contact Us
                </Typography>
                <Typography variant="body2">
                H, No: 1-60/8/6/E-1,<br />
                Rolling Stones Society, Gachibowli ,<br/>
                Telangana - 32
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                Phone: +91 91105 78329
                </Typography>
            </Grid>

            <Grid item xs={12} md={3}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                Follow Us
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/24/4b5563/facebook--v1.png" alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/blissforanimals/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/24/4b5563/instagram-new.png" alt="Instagram" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/24/4b5563/twitter.png" alt="Twitter" />
                </a>
                </Box>
            </Grid>
            </Grid>

            {/* Divider Line */}
            <Box sx={{ mt: 4, borderTop: '1px solid #e5e7eb', pt: 3 }}>
            <Typography variant="body2" align="center">
                © 2025 Bliss Foundation. All rights reserved.
            </Typography>
            </Box>
        </Box>
        </Box>

    </Box>
  );
}
