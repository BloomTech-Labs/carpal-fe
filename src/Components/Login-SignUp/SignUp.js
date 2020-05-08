import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withFormik, Form } from "formik";
import * as Yup from "yup";
import "./SignUp.scss";
import LabelField from "../Form-Components/LabelField";
import cuties from "../../img/background/Cutie-Trio-Bckgrnd.png";
import getGoogleRoute from "../../Utils/GoogleRoute";

import { SignUpAction } from "../../Redux/Actions/UserAction";

function SignUp(props) {
    const { errors, touched } = props;

    useEffect(() => {
        if (localStorage.getItem("token")) {
            props.history.push("/profilepage");
        }
    }, [localStorage.getItem("token")]);
    return (
        <div className="signup-container">
            {/* form container */}
            <Form className="formik-container">
                <p role="signup-component" className="signup-p">
                    Sign Up
                </p>

                <LabelField
                    name="first_name"
                    type="text"
                    placeholder="First Name"
                    touched={touched.first_name}
                    error={errors.first_name}
                />

                <LabelField
                    name="last_name"
                    type="text"
                    placeholder="Last Name"
                    touched={touched.last_name}
                    error={errors.last_name}
                />

                <LabelField
                    name="email"
                    type="email"
                    placeholder="Email@email.com"
                    touched={touched.email}
                    error={errors.email}
                />

                <LabelField
                    name="password"
                    type="password"
                    placeholder="Password"
                    touched={touched.password}
                    error={errors.password}
                />

                <button type="submit">Submit</button>
                <a
                    className="btn"
                    href={getGoogleRoute()}
                >
                    Signup With Google
                </a>
            </Form>
            <div className="module-nav">
                <img className="module-cuties" src={cuties} alt="cuties" />
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

const SignUpForm = withFormik({
    mapPropsToValues: (values) => {
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
            .min(5, "Password must be at least 5 characters.")
            .required("Please enter your password.")
    }),
    handleSubmit(values, { props }) {
        props.SignUpAction(values, props);
    }
})(SignUp);

export default connect(null, { SignUpAction })(SignUpForm);
