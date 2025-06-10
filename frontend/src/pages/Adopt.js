import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import AnimalCard from "../components/AnimalCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Adopt() {
	const [animals, setAnimals] = useState([]);

	useEffect(() => {
		const fetchAnimals = async () => {
			const response = await fetch("/api/animals");
			const json = await response.json();

			if (response.ok) {
				setAnimals(json);
			}
		};

		fetchAnimals();
	}, []);

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
					{animals.map((animal) => (
						<Grid item key={animal._id} xs={12} sm={6} md={4}>
							<AnimalCard
								photo={animal.imageUrl}
								type={animal.type}
								name={animal.name}
								location={animal.location}
								breed={animal.breed}
								age={animal.age}
								onAdopt={() =>
									alert(`Thank you for choosing to adopt ${animal.name}!`)
								}
							/>
						</Grid>
					))}
				</Grid>
			</Box>

			<Footer />
		</Box>
	);
}