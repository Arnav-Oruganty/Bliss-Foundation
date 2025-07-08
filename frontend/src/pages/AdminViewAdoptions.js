import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  CircularProgress
} from "@mui/material";
import AdminHeader from "../components/AdminHeader";
import Footer from "../components/Footer";

export default function AdminViewAdoptions() {
  const [adoptions, setAdoptions] = useState([]);
  const [loading, setLoading] = useState(true); // <-- loading state

  useEffect(() => {
    const fetchAdoptions = async () => {
      try {
        const response = await fetch("https://bliss-foundation.onrender.com/api/adoptions");
        const data = await response.json();
        setAdoptions(data);
      } catch (error) {
        console.error("Failed to fetch adoptions:", error);
      } finally {
        setLoading(false); // loading ends whether success or error
      }
    };

    fetchAdoptions();
  }, []);

  return (
    <>
      <AdminHeader />

      <Box sx={{ maxWidth: "1000px", mx: "auto", mt: 6, mb: 8 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#15803d", mb: 4, textAlign: "center" }}
        >
          Adoption Requests
        </Typography>

        {/* Show loading spinner */}
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
            <CircularProgress color="success" />
          </Box>
        ) : (
          <Grid container spacing={3}>
            {adoptions.length === 0 ? (
              <Typography variant="body1" sx={{ mx: "auto", mt: 4 }}>
                No adoption requests found.
              </Typography>
            ) : (
              adoptions.map((adoption, idx) => (
                <Grid item xs={12} sm={6} md={6} key={idx}>
                  <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ color: "#15803d", mb: 1 }}>
                        {adoption.name}
                      </Typography>
                      <Divider sx={{ mb: 1 }} />
                      <Typography variant="body2"><strong>Email:</strong> {adoption.email}</Typography>
                      <Typography variant="body2"><strong>Phone:</strong> {adoption.phone}</Typography>
                      <Typography variant="body2"><strong>Animal:</strong> {adoption.animalName}</Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        <strong>Message:</strong> {adoption.message || "No message"}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: "block", mt: 1 }}
                      >
                        Submitted on: {new Date(adoption.createdAt).toLocaleString()}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
        )}
      </Box>

      <Footer />
    </>
  );
}
