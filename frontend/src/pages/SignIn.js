import { Box, Typography, TextField, Button, Paper } from "@mui/material";

export default function SignIn() {
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
            Sign In to Bliss Foundation
          </Typography>
          <Typography sx={{ mb: 3, textAlign: "center" }}>
            Welcome back! Please sign in to continue.
          </Typography>
          <form>
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              required
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
              Sign In
            </Button>
          </form>
        </Paper>
      </Box>
    </Box>
  );
}