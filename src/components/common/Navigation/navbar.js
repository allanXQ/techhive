import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import {
  AppBar,
  Box,
  Button,
  Container,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "40vw",
  },
}));

const Navlink = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
}));

const IconSize = "2rem";

const SearchBar = ({ showsm }) => {
  return (
    <Box
      sx={{
        display: showsm
          ? { sm: "flex", md: "none" }
          : { xs: "none", md: "flex" },
        gap: "1rem",
        // width: "10%",
      }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search products, brands..."
          inputProps={{ "aria-label": "Search produscts" }}
        />
      </Search>
      <Button variant="contained">Search</Button>
    </Box>
  );
};

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={(theme) => ({
          display: "flex",
          px: 1,

          // justifyContent: "space-between",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          },
        })}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            position: "relative",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">TECHHIVE</Typography>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              gap: "1rem",
            }}
          >
            <AccountCircleOutlinedIcon sx={{ fontSize: IconSize }} />
            <ShoppingCartOutlinedIcon sx={{ fontSize: IconSize }} />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "3rem",
          }}
        >
          <SearchBar />

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "2rem",
            }}
          >
            <Navlink>
              <AccountCircleOutlinedIcon sx={{ fontSize: IconSize }} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.2rem",
                }}
              >
                <Typography>Account</Typography>
                <KeyboardArrowDownOutlinedIcon sx={{ fontSize: "larger" }} />
              </Box>
            </Navlink>

            <Navlink>
              <HelpOutlineOutlinedIcon sx={{ fontSize: IconSize }} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.2rem",
                }}
              >
                <Typography>Help</Typography>
                <KeyboardArrowDownOutlinedIcon sx={{ fontSize: "larger" }} />
              </Box>
            </Navlink>
            <Navlink>
              <ShoppingCartOutlinedIcon sx={{ fontSize: IconSize }} />
              <Typography>Cart</Typography>
            </Navlink>
          </Box>
        </Box>

        <SearchBar showsm={true} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
