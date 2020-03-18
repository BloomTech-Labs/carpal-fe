import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "./SignUp.scss";

function SignUp(props) {
    const { errors, touched } = props;

    return (
        <div className="login-container">
            {/* form container */}
            <Form className="formik-container">
                <p role="signup-component" className="signup-p">
                    Sign Up
                </p>
                <label className="field-label">
                    {touched.first_name && errors.first_name && (
                        <p className="form-error">{errors.first_name}</p>
                    )}
                    <Field
                        className="formik-fields"
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                    />
                </label>

                <label className="field-label">
                    {touched.last_name && errors.last_name && (
                        <p className="form-error">{errors.last_name}</p>
                    )}
                    <Field
                        className="formik-fields"
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                    />
                </label>

                <label className="field-label">
                    {touched.email && errors.email && (
                        <p className="form-error">{errors.email}</p>
                    )}
                    <Field
                        className="formik-fields"
                        type="email"
                        name="email"
                        placeholder="Email@email.com"
                    />
                </label>

                <label className="field-label">
                    {touched.password && errors.password && (
                        <p className="form-error">{errors.password}</p>
                    )}
                    <Field
                        className="formik-fields"
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                </label>

                <button className="form-btn" type="submit">
                    Submit
                </button>
            </Form>

            <div className="module-nav">
                <p className="module-p">
                    Already a user?
                    <Link className="login-link" to="/login">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default withFormik({
    mapPropsToValues: values => {
        return {
            first_name: values.first_name || "",
            last_name: values.last_name || "",
            email: values.email || "",
            password: values.password || ""
        };
    },
    validationSchema: Yup.object().shape({
        first_name: Yup.string().required("Please enter your first name."),
        last_name: Yup.string().required("Please enter your last name."),
        email: Yup.string()
            .email("Please enter a valid email.")
            .required("Please enter your email."),
        password: Yup.string()
            .min(10, "Password must be at least 10 characters.")
            .required("Please enter your password.")
    }),
    handleSubmit(values) {
        console.log(values);
    }
})(SignUp);
