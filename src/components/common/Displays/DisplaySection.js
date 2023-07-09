import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import React from "react";

const products = [
  {
    id: 1,
    name: 'Asus ZenBook Pro Duo 15" OLED UX582 I9 32GB RAM 1TB SSD',
    price: 1000,
    formerPrice: 1200,
    initialStock: 20,
    remainingStock: 10,
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/787548/1.jpg?1482",
  },
  {
    id: 1,
    name: "Samsung Galaxy S21",
    price: 1000,
    formerPrice: 1200,
    initialStock: 20,
    remainingStock: 10,
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/787548/1.jpg?1482",
  },
  {
    id: 1,
    name: "Samsung Galaxy S21",
    price: 1000,
    formerPrice: 1200,
    initialStock: 20,
    remainingStock: 10,
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/787548/1.jpg?1482",
  },
  {
    id: 1,
    name: "Samsung Galaxy S21",
    price: 1000,
    formerPrice: 1200,
    initialStock: 20,
    remainingStock: 10,
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/787548/1.jpg?1482",
  },
  {
    id: 1,
    name: "Samsung Galaxy S21",
    price: 1000,
    formerPrice: 1200,
    initialStock: 20,
    remainingStock: 10,
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/787548/1.jpg?1482",
  },
  {
    id: 1,
    name: "Samsung Galaxy S21",
    price: 1000,
    formerPrice: 1200,
    initialStock: 20,
    remainingStock: 10,
    image:
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/787548/1.jpg?1482",
  },
];

const DisplaySection = () => {
  return (
    <Grid
      container
      sx={(theme) => ({
        width: "fit-content",
        alignItems: "center",
        width: "90vw",
      })}
    >
      <Grid
        item
        xs={12}
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "3rem",
          bgcolor: theme.palette.primary.main,
        })}
      >
        <Typography variant="h6">Best Deals</Typography>
        <Box
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: theme.spacing(3),
          })}
        >
          <Typography>SEE ALL</Typography>
          <ArrowForwardIosOutlinedIcon fontSize="small" />
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        sx={(theme) => ({
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: theme.spacing(0.5),
        })}
      >
        {products.map((product) => (
          <Box
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "fit-content",
              maxWidth: 200,
              bgcolor: "white",
              pb: theme.spacing(1),
              px: theme.spacing(1),
            })}
          >
            <img
              alt={product.name}
              src={product.image}
              key={product.id}
              width={185}
            />
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
                pt: theme.spacing(1),
                gap: theme.spacing(1),
              })}
            >
              <Typography
                variant="productName"
                sx={(theme) => ({
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  maxWidth: 160,
                })}
              >
                {product.name}
              </Typography>
              <Typography variant="productPrice">
                Ksh {product.price.toLocaleString()}
              </Typography>
              {product.formerPrice && (
                <Typography variant="formerPrice" component="s">
                  Ksh {product.formerPrice.toLocaleString()}
                </Typography>
              )}
              {product.remainingStock && (
                <Typography variant="itemsLeft">
                  {product.remainingStock} items left
                </Typography>
              )}
              {product.remainingStock && (
                <LinearProgress
                  variant="determinate"
                  sx={(theme) => ({
                    height: "5px",
                    width: "100%",
                  })}
                  value={
                    ((product.initialStock - product.remainingStock) /
                      product.initialStock) *
                    100
                  }
                />
              )}
            </Box>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default DisplaySection;
