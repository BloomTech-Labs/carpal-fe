import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "./Login.scss";

function Login(props) {
    const { errors, touched } = props;

    return (
        <div className="login-container">
            {/* form container */}
            <Form className="formik-container">
                <p role="login-component" className="login-p">
                    Login
                </p>
                <label className="field-label">
                    {touched.email && errors.email && (
                        <p className="form-error">{errors.email}</p>
                    )}
                    <Field
                        className="formik-fields"
                        type="email"
                        name="email"
                        placeholder="email@email.com"
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
                        placeholder="password"
                    />
                </label>
                <button className="form-btn" type="submit">
                    Submit
                </button>
            </Form>

            <div className="module-nav">
                <p className="module-p">
                    New to the website?
                    <Link className="signup-link" to="/signup">
                        Sign Up!
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default withFormik({
    mapPropsToValues: values => {
        return {
            email: values.email || "",
            password: values.password || ""
        };
    },
    validationSchema: Yup.object().shape({
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
})(Login);
