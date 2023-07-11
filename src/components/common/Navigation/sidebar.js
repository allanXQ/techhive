import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const categories = [
    {
      name: "SmartPhones",
      path: "/category/smartphones",
    },
    {
      name: "Laptops",
      path: "/category/laptops",
    },
    {
      name: "Accessories",
      path: "/category/accessories",
    },
  ];
  return (
    <Grid container>
      <Grid item xs={12} md={3}>
        {categories.map((category) => (
          <Typography
            key={category.name}
            variant="h6"
            component={Link}
            to={category.path}
          >
            {category.name}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
};

export default Sidebar;
