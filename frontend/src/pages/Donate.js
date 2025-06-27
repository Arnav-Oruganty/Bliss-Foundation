import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import { QRCodeSVG } from "qrcode.react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Donate() {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleDonate = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can integrate with a payment gateway or backend API
  };

  const upiId = ""; // Replace with your UPI ID

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

      <Box sx={{ maxWidth: 500, mx: "auto", mt: 6, mb: 8 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#15803d",
              mb: 2,
              textAlign: "center",
            }}
          >
            Support Bliss Foundation
          </Typography>
          <Typography sx={{ mb: 3, textAlign: "center" }}>
            Your donation helps us rescue, shelter, and care for more animals in need. Thank you for your support!
          </Typography>
          {submitted ? (
            <>
              <Typography sx={{ color: "#15803d", fontWeight: "bold", textAlign: "center" }}>
                Thank you for your generous donation!
              </Typography>
              <Box sx={{ textAlign: "center", mt: 4 }}>
                <Typography sx={{ mb: 2 }}>
                  Scan this QR code to pay via UPI:
                </Typography>
                <QRCodeSVG
                  value={`upi://pay?pa=${upiId}&pn=${encodeURIComponent('BLISS FOUNDATION')}&am=${amount}&cu=INR&tn=${encodeURIComponent(message)}`}
                  size={200}
                />
                <Typography sx={{ mt: 2, fontSize: "0.9rem" }}>
                  Or pay to UPI ID: <b>{upiId}</b>
                </Typography>
              </Box>
            </>
          ) : (
            <form onSubmit={handleDonate}>
              <TextField
                label="Name"
                fullWidth
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Amount (INR)"
                type="number"
                fullWidth
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                sx={{ mb: 2 }}
                inputProps={{ min: 1 }}
              />
              <TextField
                label="Message (optional)"
                fullWidth
                multiline
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{ mb: 3 }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#15803d",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "9999px",
                  py: 1.5,
                  fontSize: "1rem",
                  "&:hover": { backgroundColor: "#166534" },
                }}
              >
                Donate Now
              </Button>
            </form>
          )}
        </Paper>
      </Box>

      <Footer />
    </Box>
  );
}