import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

function SignUp() {
    return (
        <div className="signup-container">
            
            <div className="module-nav">
                <NavLink className="login-title" to="/login">
                    Login
                </NavLink>
                {/* signup container */}
                <NavLink className="signup-link" to="/signup">
                    Sign Up
                </NavLink>
                <p>signup</p>
            </div>
        </div>
    )
}

export default SignUp;