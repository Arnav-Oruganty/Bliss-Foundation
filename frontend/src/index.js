import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Optional: You can customize the theme to match your green/gray/white scheme
const theme = createTheme({
  palette: {
    primary: {
      main: "#15803d", // green
    },
    secondary: {
      main: "#6B7280", // gray
    },
    background: {
      default: "#ffffff", // white
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

