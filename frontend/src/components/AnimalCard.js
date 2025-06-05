import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

export default function AnimalCard({ photo, type, name, location, breed, age, onAdopt }) {
  return (
    <Card
      sx={{
        width: 320,
        minHeight: 420,
        borderRadius: 3,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <CardMedia
        component="img"
        image={photo}
        alt={`${type} named ${name}`}
        sx={{
          width: "100%",
          height: 180,
          objectFit: "cover",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12
        }}
      />
      <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#15803d", mb: 1 }}>
          {name}
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Type:</strong> {type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Breed:</strong> {breed}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Location:</strong> {location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Age:</strong> {age}
          </Typography>
        </Box>
        <Box sx={{ mt: "auto", textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#15803d",
              color: "white",
              borderRadius: "9999px",
              textTransform: "none",
              px: 3,
              "&:hover": { backgroundColor: "#166534" }
            }}
            onClick={onAdopt}
          >
            Adopt Me
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

