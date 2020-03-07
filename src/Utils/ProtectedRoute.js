import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = props => {
    const { component: Component, ...rest } = props;
    return (
        <Route
            {...rest}
            render={renderProps =>
                localStorage.getItem("token") ? (
                    <Component {...renderProps} />
                ) : (
                    <Redirect to="/Login" />
                )
            }
        />
    );
};

export default ProtectedRoute;
