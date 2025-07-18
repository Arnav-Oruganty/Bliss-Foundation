import { Box, Typography, TextField, Button, Paper, Link as MuiLink } from "@mui/material";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://bliss-foundation.onrender.com/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("loggedInEmail", JSON.stringify(data.user.email));
      localStorage.setItem("loggedInName", data.user.name);
      if (data.user.isAdmin) {
        navigate('/adminanimalmanagement');
      } else {
        navigate('/');
      }
    } else {
      setError(data.message || 'Login failed');
      console.error('Login error:', data);
    }
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
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              sx={{ mb: 2 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              sx={{ mb: 3 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <Typography color="error" sx={{ mb: 2 }}>
                {error}
              </Typography>
            )}
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
          <Typography sx={{ mt: 2, textAlign: "center" }}>
            Not registered?{" "}
            <MuiLink component={Link} to="/signup" sx={{ color: "#15803d", fontWeight: "bold", textDecoration: "underline", cursor: "pointer" }}>
              Sign up
            </MuiLink>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}