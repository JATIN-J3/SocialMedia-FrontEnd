import { Button, TextField } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as  Yup from "yup"
import './Login.css'
import { useDispatch } from 'react-redux';
import { loginUser, loginUserAction } from '../../Redux/Auth/auth.action';
import { useNavigate } from 'react-router-dom';
const initialValues={
    email:"",
    password:""
};



const validationSchema = Yup.object().shape({

  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const dispatch=useDispatch();

  const navigate = useNavigate();

    const[formvalue,setformvalue]=useState();


    const handleSubmit = (values, { setSubmitting }) => {
      // Handle form submission here
      console.log(values);
      dispatch(loginUser({data:values,navigate}));
      setSubmitting(false);
    };
  
  return (
    <>
      <Formik onSubmit={handleSubmit} validationSchema={validationSchema}
       initialValues={initialValues} >

            <Form className='space-y-5'>
                <div className='space-y-5'>
                 <div>
                 <Field className="bg-[#c3b0f0]  border-2 border-solid border-white"  name="email" placeholder="Email" as={TextField} type="email"  varinat="outlined" fullWidth />
                    <ErrorMessage name="email" component={"div"} className='text-red-500' />

                 </div>

                 <div>
                 <Field  className="bg-[#c3b0f0] "  name="password" placeholder="Password" as={TextField} type="password"  varinat="outlined" fullWidth />
                    <ErrorMessage name="password" component={"div"} className='text-red-500' />

                 </div>
                 
                </div>
                <Button sx={{padding:".8rem 0rem",background:'#522e82'}} fullWidth type='submit' variant='contained' id='bt' >
                    Login
                </Button>
            </Form>


      </Formik>
    </>
  )
}

export default Login
