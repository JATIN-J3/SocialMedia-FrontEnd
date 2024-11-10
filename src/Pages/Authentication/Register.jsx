import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Redux/Auth/auth.action";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});



function Register() {
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "male",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    dispatch(registerUser(values))
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div>
      <h1 className="text-white text-2xl ml-[15vh] mb-8">.. Registration ..</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-5">
          <div className="space-y-5">
            <div>
              <Field
                as={TextField}
                name="firstName"
                // label="First Name"
                placeholder="First Name"
                variant="outlined"
                fullWidth
                className="bg-[#c3b0f0]"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <Field
                as={TextField}
                name="lastName"
                placeholder="Last Name"
                variant="outlined"
                
                className="bg-[#c3b0f0]"
                fullWidth
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <Field
                as={TextField}
                name="email"
                placeholder="Email"
                type="email"
                variant="outlined"
                
                className="bg-[#c3b0f0]"
                fullWidth
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <Field
                as={TextField}
                name="password"
                placeholder="Password"
                type="password"
                variant="outlined"
                
                className="bg-[#c3b0f0]"
                fullWidth
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <RadioGroup row name="gender" aria-label="gender">
                <FormControlLabel
                  value="male"
                  control={<Radio sx={{color:"white"}} />}
                  label="Male"
                  sx={{background:"[#c3b0f0]",color:"white"}}
                />
                <FormControlLabel
                  value="female"
                  control={<Radio sx={{color:"white"}}  />}
                  label="Female"
                  sx={{color:"white"}}
                />
              </RadioGroup>
              <ErrorMessage
                name="gender"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <Button
            sx={{ padding: ".8rem 0rem" ,background:"#522e82",color:"white"}}
            fullWidth
            type="submit"
            variant="contained"
            id="bt"
          >
            Register
          </Button>
        </Form>
      </Formik>
    
     
    </div>
  );
}

export default Register;

