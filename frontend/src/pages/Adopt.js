import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import AnimalCard from "../components/AnimalCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import animal1 from "../assets/animal1.jpeg";
import animal2 from "../assets/animal2.jpg";

const animals = [
	{
		photo: animal1,
		type: "Dog",
		name: "Buddy",
		location: "Hyderabad",
		breed: "Labrador",
		age: "2 years",
	},
	{
		photo: animal2,
		type: "Cat",
		name: "Misty",
		location: "Secunderabad",
		breed: "Persian",
		age: "1 year",
	},
	{
		photo: animal1,
		type: "Dog",
		name: "Rocky",
		location: "Gachibowli",
		breed: "Beagle",
		age: "3 years",
	},
	{
		photo: animal2,
		type: "Cat",
		name: "Luna",
		location: "Madhapur",
		breed: "Siamese",
		age: "8 months",
	},
];

export default function Adopt() {
	const handleAdopt = (name) => {
		alert(`Thank you for your interest in adopting ${name}!`);
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
				<Grid container spacing={4} justifyContent="center">
					{animals.map((animal, idx) => (
						<Grid item xs={12} sm={6} md={4} key={idx}>
							<AnimalCard
								{...animal}
								onAdopt={() => handleAdopt(animal.name)}
							/>
						</Grid>
					))}
				</Grid>
			</Box>

			<Footer />
		</Box>
	);
}