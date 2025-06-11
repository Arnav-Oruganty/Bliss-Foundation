import { useState } from "react";
import { Box, TextField, Button, Paper, Typography, MenuItem } from "@mui/material";

const initialState = {
  name: "",
  species: "",
  age: "",
  healthStatus: "Healthy",
  location: "",
};

const healthOptions = [
  { value: "Healthy", label: "Healthy" },
  { value: "Sick", label: "Sick" },
  { value: "Injured", label: "Injured" },
];

const AnimalForm = ({ onAnimalAdded }) => {
  const [form, setForm] = useState(initialState);
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => data.append(key, value));
    if (imageFile) data.append("image", imageFile);

    const response = await fetch("https://bliss-foundation.onrender.com/api/animals", {
      method: "POST",
      body: data,
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error || "Failed to add animal");
      setEmptyFields(json.emptyFields || []);
    }
    if (response.ok) {
      setEmptyFields([]);
      setError(null);
      setForm(initialState);
      setImageFile(null);
      if (onAnimalAdded) onAnimalAdded();
    }
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", color: "#09bcd4", mb: 2 }}>
        Add New Animal
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField 
            label="Name" 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            required error={emptyFields.includes("name")} 
        />
        <TextField 
            label="Species" 
            name="species" 
            value={form.species} 
            onChange={handleChange} 
            required error={emptyFields.includes("species")} 
        />
        <TextField 
            label="Age" 
            name="age" 
            type="number" 
            value={form.age} 
            onChange={handleChange} 
            required 
            inputProps={{ min: 0 }} 
            error={emptyFields.includes("age")} />
        <TextField 
            select 
            label="Health Status" 
            name="healthStatus" 
            value={form.healthStatus} 
            onChange={handleChange} 
            required error={emptyFields.includes("healthStatus")}
        >
            {healthOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
            ))}
        </TextField>
        <TextField 
            label="Location" 
            name="location" 
            value={form.location} 
            onChange={handleChange} 
            required error={emptyFields.includes("location")} 
        />
        <Button 
            variant="outlined" 
            component="label"
        >
            Upload Image
            <input 
                type="file" 
                accept="image/*" 
                hidden onChange={handleImageChange} 
            />
        </Button>
        {imageFile && <Typography variant="body2">{imageFile.name}</Typography>}
        <Button
          type="submit"
          variant="contained"
          sx={{
            background: "#09bcd4",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "9999px",
            mt: 1,
            "&:hover": { background: "#007c91" },
          }}
        >
          Add Animal
        </Button>
        {error && <Typography color="error">{error}</Typography>}
      </Box>
    </Paper>
  );
};

export default AnimalForm;