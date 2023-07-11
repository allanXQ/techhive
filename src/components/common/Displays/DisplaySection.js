import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  fetchProducts,
  getAllProducts,
  getProductsStatus,
} from "../../../Redux/Slices/products";
import { useDispatch } from "react-redux";

const DisplaySection = () => {
  const products = useSelector(getAllProducts);
  const status = useSelector(getProductsStatus);

  return (
    <Grid
      container
      sx={(theme) => ({
        alignItems: "center",
        width: "90vw",
        [theme.breakpoints.down("lg")]: {
          width: "100vw",
        },
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
          px: theme.spacing(2),
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
        sx={(theme) => ({
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: theme.spacing(0.5),
          [theme.breakpoints.down("lg")]: {
            alignItems: "flex-start",
            gap: theme.spacing(1),
          },
          [theme.breakpoints.down("md")]: {
            alignItems: "flex-start",
            flexWrap: "wrap",
          },
          [theme.breakpoints.down("sm")]: {},
        })}
      >
        {status === "succeeded" &&
          products.map((product) => (
            <Box
              key={product.id}
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "fit-content",
                maxWidth: 200,
                bgcolor: "white",
                pb: theme.spacing(1),
                px: theme.spacing(1),
                //   [theme.breakpoints.down("lg")]: {
                //     width: 400,
                //   },
              })}
            >
              <img
                alt={product.name}
                src={product.thumbnail}
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
                  {/* Ksh {product.price.toLocaleString()} */}
                </Typography>
                {product.formerPrice && (
                  <Typography variant="formerPrice" component="s">
                    {/* Ksh {product.formerPrice.toLocaleString()} */}
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
