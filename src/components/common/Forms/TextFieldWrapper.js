import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

const TextFieldWrapper = styled(TextField)((props, theme) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: props.error ? "red" : "black",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
}));
const TextFieldComponent = ({ inputField, formikProps }) => {
  console.log(formikProps.getFieldProps(inputField.name));
  return (
    <TextFieldWrapper
      {...inputField}
      {...formikProps.getFieldProps(inputField.name)}
      error={
        formikProps.touched[inputField.name] &&
        formikProps.errors[inputField.name]
      }
      helperText={
        formikProps.touched[inputField.name] &&
        formikProps.errors[inputField.name]
      }
      InputLabelProps={{ shrink: true }}
      fullWidth
    />
  );
};

export default TextFieldComponent;
