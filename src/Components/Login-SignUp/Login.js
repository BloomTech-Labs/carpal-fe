import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "./Login.scss";
import LabelField from '../Form-Components/LabelField';

import { LogInAction } from "../../Redux/Actions/UserAction";

function Login(props) {
    const { errors, touched } = props;

    useEffect(() => {
        if (localStorage.getItem("token")) {
            props.history.push("/profilepage")
        }
    }, [localStorage.getItem("token")])

    return (
        <div className="login-container">
            {/* form container */}
            <Form className="formik-container">
                <p role="login-component" className="login-p">
                    Login
                </p>
                <LabelField name="email" touched={touched.email} error={errors.email} type="email" placeholder="Email@email.com"/>

                <LabelField name="password" type="password" touched={touched.password} error={errors.password} placeholder="Password" />
                <button className="form-btn" type="submit">
                    Submit
                </button>
                <a
                    className="form-btn"
                    href="https://staging-carpal.herokuapp.com/auth/google/testing"
                >
                    Login With Google
                </a>
                <Link className="forgot-password" to="/signup">
                    Forgot your password?
                </Link>
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

const LoginForm = withFormik({
    mapPropsToValues: (values) => {
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
            .min(5, "Password must be at least 10 characters.")
            .required("Please enter your password.")
    }),
    handleSubmit(values, { props }) {
        props.LogInAction(values);
    }
})(Login);

export default connect(null, { LogInAction })(LoginForm);
