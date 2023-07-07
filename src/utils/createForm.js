import { Form, Formik } from "formik";
import TextFieldComponent from "../components/common/Forms/TextFieldWrapper";
import { Button } from "@mui/material";

const createForm = (model) => {
  const submithandler = (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={model.initialValues}
      validationSchema={model.validationSchema}
      onSubmit={submithandler}
    >
      {(props) => (
        <Form
          style={
            model.style
              ? model.style
              : { display: "flex", flexDirection: "column", gap: "1rem" }
          }
        >
          {model.fields.map((item, index) => {
            switch (item.type) {
              case "text":
              case "date":
              case "email":
              case "password":
              case "number":
                return (
                  <TextFieldComponent
                    key={index}
                    inputField={item}
                    formikProps={props}
                  />
                );
              default:
                return null;
            }
          })}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={props.isSubmitting}
          >
            {model.buttonText}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default createForm;
