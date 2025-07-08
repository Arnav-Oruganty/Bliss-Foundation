import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import AnimalCard from "../components/AnimalCard";
import AnimalForm from "../components/AnimalForm";
import AdminHeader from "../components/AdminHeader";
import Footer from "../components/Footer";

export default function AdminAnimalManagement() {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        const fetchAnimals = async () => {
            const response = await fetch("https://bliss-foundation.onrender.com/api/animals");
            const json = await response.json();

            if (response.ok) {
                setAnimals(json);
            }
        };

        fetchAnimals();
    }, []);

    // Refresh animals after adding a new one
    const handleAnimalAdded = () => {
        fetch("https://bliss-foundation.onrender.com/api/animals")
            .then((res) => res.json())
            .then((json) => setAnimals(json));
    };

    const handleDeleteAnimal = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this animal?");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`https://bliss-foundation.onrender.com/api/animals/${id}`, {
            method: "DELETE"
            });

            if (response.ok) {
            setAnimals((prev) => prev.filter((animal) => animal._id !== id));
            } else {
            alert("Failed to delete animal.");
            }
        } catch (error) {
            console.error("Delete error:", error);
            alert("Something went wrong while deleting.");
        }
    };

    return (
        <>
            <AdminHeader />

            <Box sx={{ maxWidth: "1200px", mx: "auto", mb: 8, mt: 4 }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: "bold",
                        color: "#15803d",
                        mb: 4,
                        textAlign: "center",
                    }}
                >
                    Add New Animals for Adoption
                </Typography>

                <Box sx={{ mt: 6, mb: 8, maxWidth: 500, mx: "auto" }}>
                    <AnimalForm onAnimalAdded={handleAnimalAdded} />
                </Box>

                <Grid container spacing={4} justifyContent="center">
                    {animals.map((animal) => (
                        <Grid item key={animal._id} xs={12} sm={6} md={4}>
                            <AnimalCard
                                photo={animal.imageUrl}
                                type={animal.type || animal.species}
                                name={animal.name}
                                location={animal.location}
                                breed={animal.breed}
                                age={animal.age}
                                showAdoptButton={false}
                                onDelete={() => handleDeleteAnimal(animal._id)} 
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Footer />
        </>
    );
}