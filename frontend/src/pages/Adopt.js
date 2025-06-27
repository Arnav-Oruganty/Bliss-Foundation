import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, TextField, CircularProgress, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import AnimalCard from "../components/AnimalCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Adopt() {
    const [animals, setAnimals] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [userDetails, setUserDetails] = useState({ name: "", email: "", phone: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const fetchAnimals = async () => {
            const response = await fetch("https://bliss-foundation.onrender.com/api/animals");
            const json = await response.json();
            console.log("Fetched animals:", json);

            if (response.ok) {
                setAnimals(json);
            }
            setLoading(false);
        };

        fetchAnimals();
    }, []);

    const filteredAnimals = animals.filter(animal =>
        animal.name.toLowerCase().includes(search.toLowerCase()) ||
        (animal.species && animal.species.toLowerCase().includes(search.toLowerCase())) ||
        (animal.location && animal.location.toLowerCase().includes(search.toLowerCase()))
    );

    const handleAdoptClick = (animal) => {
        setSelectedAnimal(animal);
        setOpen(true);
        setSubmitted(false);
        setUserDetails({ name: "", email: "", phone: "", message: "" });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);

        // Send details to backend for email
        await fetch("https://bliss-foundation.onrender.com/api/adoptions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...userDetails,
                animalName: selectedAnimal?.name
            })
        });
    };

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

            <Box sx={{ maxWidth: "1200px", mx: "auto", mb: 8 }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: "bold",
                        color: "#15803d",
                        mb: 4,
                        textAlign: "center",
                    }}
                >
                    Animals Available for Adoption
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                    <TextField
                        label="Search by name, species, or location"
                        variant="outlined"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        sx={{ width: 400 }}
                    />
                </Box>
                {loading ? (
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
                        <CircularProgress color="success" />
                    </Box>
                ) : (
                    <Grid container spacing={4} justifyContent="center">
                        {filteredAnimals.map((animal) => (
                            <Grid item key={animal._id} xs={12} sm={6} md={4}>
                                <AnimalCard
                                    photo={
                                        animal.imageUrl
                                            ? animal.imageUrl
                                            : "https://via.placeholder.com/320x180?text=No+Image"
                                    }
                                    type={animal.type || animal.species}
                                    name={animal.name}
                                    location={animal.location}
                                    breed={animal.breed}
                                    age={animal.age}
                                    onAdopt={() => handleAdoptClick(animal)}
                                />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Box>

            {/* Adoption Interest Modal */}
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Adopt {selectedAnimal?.name}</DialogTitle>
                <DialogContent>
                    {submitted ? (
                        <Typography sx={{ color: "#15803d", fontWeight: "bold", mt: 2 }}>
                            Thank you for your interest! Our team will contact you soon.
                        </Typography>
                    ) : (
                        <form onSubmit={handleFormSubmit}>
                            <TextField
                                label="Your Name"
                                fullWidth
                                required
                                sx={{ my: 1 }}
                                value={userDetails.name}
                                onChange={e => setUserDetails({ ...userDetails, name: e.target.value })}
                            />
                            <TextField
                                label="Email"
                                type="email"
                                fullWidth
                                required
                                sx={{ my: 1 }}
                                value={userDetails.email}
                                onChange={e => setUserDetails({ ...userDetails, email: e.target.value })}
                            />
                            <TextField
                                label="Phone"
                                type="tel"
                                fullWidth
                                required
                                sx={{ my: 1 }}
                                value={userDetails.phone}
                                onChange={e => setUserDetails({ ...userDetails, phone: e.target.value })}
                            />
                            <TextField
                                label="Message (optional)"
                                fullWidth
                                multiline
                                rows={2}
                                sx={{ my: 1 }}
                                value={userDetails.message}
                                onChange={e => setUserDetails({ ...userDetails, message: e.target.value })}
                            />
                            <DialogActions>
                                <Button onClick={() => setOpen(false)}>Cancel</Button>
                                <Button type="submit" variant="contained" sx={{ backgroundColor: "#15803d" }}>
                                    Submit
                                </Button>
                            </DialogActions>
                        </form>
                    )}
                </DialogContent>
            </Dialog>

            <Footer />
        </Box>
    );
}
