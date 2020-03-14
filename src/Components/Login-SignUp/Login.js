import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
// import "./Login.scss";

function Login(props) {
const { errors, touched } = props

    return (
        <div className="login-container">
            <div className="module-nav">
                <NavLink className="login-title" to="/login">
                    Login
                </NavLink>
                {/* signup link */}
                <NavLink className="signup-link" to="/signup">
                    Sign Up
                </NavLink>
                <p role="login-component">login</p>
            </div>

        {/* form container */}
            <Form className='formik-container'>

             {touched.email && errors.email && <p>{errors.email}</p>}
            <label>
            <Field className='formik-fields' type='email' name='email' />
            </label>
            {touched.password && errors.password && <p>{errors.password}</p>}            
            <label>
            <Field className='formik-fields' type='password' name='password' />
            </label>

            <button className='form-btn' type='submit'>
              Submit
            </button>
          </Form>
        </div>
    )}

export default withFormik({
mapPropsToValues: values  => {
    return {
        email: values.email || '',
        password: values.password || '',
    } 
},
validationSchema: Yup.object().shape({
    email: Yup.string().email("Please enter a valid email.").required("Please enter your email."),
    password: Yup.string().min(10, "Password must be at least 10 characters.").required("Please enter your password."),
},),
handleSubmit(values) {
    console.log(values)
}

})(Login);



