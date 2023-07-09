import React from "react";
import DisplaySection from "./Displays/DisplaySection";
import { Grid } from "@mui/material";

const ProductsDisplay = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DisplaySection />
    </Grid>
  );
};

export default ProductsDisplay;
