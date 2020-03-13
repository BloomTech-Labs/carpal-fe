import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Login() {
    return (
        <div className="login-container">
            <div className="module-nav">
                <NavLink className="login-title" to="/login">
                    Login
                </NavLink>
                {/* signup container */}
                <NavLink className="signup-link" to="/signup">
                    Sign Up
                </NavLink>
                <p>login</p>
            </div>
        </div>
    );
}

export default Login;

// const Login = () => (
//     <div className='login-form'>
//       <div className="module-nav">
//       <NavLink className='login-title'>Login</NavLink>
//       {/* signup container */}
//       <NavLink className='signup-link' to='/registration'>
//         Sign Up
//       </NavLink>
//       </div>

//       {/* Formik form */}
//       <Formik
//         initialValues={{ email: "", password: "" }}
//         validate={values => {
//           const errors = {};
//           if (!values.email) {
//             errors.email = "Required";
//           } else if (
//             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//           ) {
//             errors.email = "Invalid email";
//           }
//           return errors;
//         }}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//           }, 400);
//         }}
//       >
//         {({ isSubmitting }) => (
//           <Form className='formik-container'>
//             <Field className='formik-fields' type='email' name='email' />
//             <ErrorMessage name='username' component='div' />
//             <Field className='formik-fields' type='password' name='password' />
//             <ErrorMessage name='password' component='div' />
//             <button className='form-btn' type='submit' disabled={isSubmitting}>
//               Submit
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
