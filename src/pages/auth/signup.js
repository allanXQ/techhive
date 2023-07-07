import React from "react";
import createForm from "../../utils/createForm";
import { Box, Grid, Typography } from "@mui/material";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .required("Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number"
    ),
});
const initialValues = {};

const model = {
  title: "Sign up",
  validationSchema,
  initialValues,
  buttonText: "Sign in",
  fields: [
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
      required: true,
    },
    {
      name: "confirm password",
      type: "password",
      label: "Confirm Password",
      placeholder: "Confirm your password",
      required: true,
    },
  ],
  style: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "20rem",
  },
};
const Signup = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid
        item
        sx={{
          position: "relative",
          top: "10rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">{model.title}</Typography>
        <Box>{createForm(model)}</Box>
        <Box>
          <Typography variant="body1">Sign In</Typography>
        </Box>
        <Typography>OR</Typography>
        <Box>
          <Typography variant="body1">Sign in with Google</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
