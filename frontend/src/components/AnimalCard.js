import React from 'react';
import {
  Card, CardContent, CardMedia, Typography, Button, Box, IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function AnimalCard({ photo, type, name, location, breed, age, onAdopt, showAdoptButton = true, onDelete }) {
  return (
    <Card
      sx={{
        width: 320,
        borderRadius: 3,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        position: "relative"
      }}
    >
      
      {onDelete && (
        <IconButton
          onClick={onDelete}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "#f87171",
            color: "white",
            '&:hover': {
              backgroundColor: "#ef4444"
            }
          }}
        >
          <DeleteIcon />
        </IconButton>
      )}

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

      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#15803d" }}>
          {name}
        </Typography>
        <Box>
          <Typography variant="body2" color="text.secondary"><strong>Type:</strong> {type}</Typography>
          <Typography variant="body2" color="text.secondary"><strong>Breed:</strong> {breed}</Typography>
          <Typography variant="body2" color="text.secondary"><strong>Location:</strong> {location}</Typography>
          <Typography variant="body2" color="text.secondary"><strong>Age:</strong> {age}</Typography>
        </Box>

        {/* Optional "Adopt Me" button */}
        {showAdoptButton && (
          <Box sx={{ mt: 2, textAlign: "center" }}>
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
        )}
      </CardContent>
    </Card>
  );
}
