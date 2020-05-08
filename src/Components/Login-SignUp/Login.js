import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withFormik, Form } from "formik";
import * as Yup from "yup";
import "./Login.scss";
import LabelField from "../Form-Components/LabelField";
import cuties from "../../img/background/Cutie-Trio-Bckgrnd.png";
import getGoogleRoute from "../../Utils/GoogleRoute";

import { LogInAction } from "../../Redux/Actions/UserAction";

function Login(props) {
    console.log("props:", props);
    const { errors, touched } = props;
    useEffect(() => {
        let token = document.cookie.replace(
            /(?:(?:^|.*;\s*)auth\s*\=\s*([^;]*).*$)|^.*$/,
            "$1"
        );
        if (token) {
            localStorage.setItem("token", token);
            //destroy auth cookie
            document.cookie =
                "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            //push user to profile page
            props.history.push("/profilepage");
        }
    }, [localStorage.getItem("token")]);
    return (
        <div className="login-container">
            {/* form container */}
            <Form className="formik-container">
                <p role="login-component" className="login-p">
                    Login
                </p>
                <LabelField
                    name="email"
                    touched={touched.email}
                    error={errors.email}
                    type="email"
                    placeholder="Email@email.com"
                />

                <LabelField
                    name="password"
                    type="password"
                    touched={touched.password}
                    error={errors.password}
                    placeholder="Password"
                />

                {!props.error ? null : (
                    <p className="form-error">
                        {props.error.response.data.message}
                    </p>
                )}

                <button type="submit">Submit</button>
                <a className="btn" href={getGoogleRoute()}>
                    Login With Google
                </a>
                <Link className="forgot-password" to="/signup">
                    Forgot your password?
                </Link>
            </Form>

            <div className="module-nav">
                <img className="module-cuties" src={cuties} alt="cuties" />

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
            .min(5, "Password must be at least 5 characters.")
            .required("Please enter your password.")
    }),
    handleSubmit(values, { props }) {
        props.LogInAction(values, props);
    }
})(Login);

const mapStateToProps = (state) => ({
    error: state.user.error
});

export default connect(mapStateToProps, { LogInAction })(LoginForm);
