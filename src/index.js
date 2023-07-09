import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff9900",
      background: "#f1f1f2",
    },
  },
  breakpoints: {
    values: {
      xs: 300,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Poppins",
    productName: {
      color: "#313133",
      fontSize: "14px",
      lineHeight: "14px",
      verticalAlign: "baseline",
      letterApacing: "normal",
      wordSpacing: "0px",
      margin: "0px",
      fontWeight: 400,
      fontStyle: "normal",
      fontVariant: "normal",
    },
    productPrice: {
      color: "#313133",
      fontSize: "16px",
      lineHeight: "14px",
      verticalAlign: "baseline",
      letterApacing: "normal",
      wordSpacing: "0px",
      margin: "0px",
      fontWeight: 400,
      fontStyle: "normal",
      fontVariant: "normal",
    },
    formerPrice: {
      color: "#79797E",
      fontSize: "13px",
      lineHeight: "14px",
      verticalAlign: "baseline",
      letterApacing: "normal",
      wordSpacing: "0px",
      margin: "0px",
      fontWeight: 400,
      fontStyle: "normal",
      fontVariant: "normal",
    },
    itemsLeft: {
      color: "#313133",
      fontSize: "13px",
      lineHeight: "14px",
      verticalAlign: "baseline",
      letterApacing: "normal",
      wordSpacing: "0px",
      margin: "0px",
      fontWeight: 400,
      fontStyle: "normal",
      fontVariant: "normal",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
