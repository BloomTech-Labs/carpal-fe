import React from "react";
import { NavLink, withRouter } from "react-router-dom";
//icons for footer-nav

import iconHome from "../../img/footer-icons/icon-home.png";
import iconRequests from "../../img/footer-icons/icon-requests.png";
import iconSaved from "../../img/footer-icons/icon-saved.png";


import "./Nav.scss";

function Nav() {
    /// pulling token from localstorage
    const isAuthenticated = localStorage.getItem("token");

    return (
        <>
            <nav className="bottom-nav">
                {/* if user is not authenticated then nav view with routing to login/signup  */}
                {!isAuthenticated ? (
                    <>
                        <NavLink to="/login">
                            <img
                                className="profilePic"
                                src={iconSaved}
                                alt="My Rides"
                            />
                        </NavLink>
                        <NavLink to="/login">
                            <img
                                className="profilePic"
                                src={iconHome}
                                alt="Find a Ride"
                            />
                        </NavLink>
                        <NavLink to="/login">
                            <img
                                className="profilePic"
                                src={iconRequests}
                                alt="Ride Requests"
                            />
                        </NavLink>
                    </>
                ) : (
                    // if you are a user you will be given this footer-navigation.
                    <>
                        <NavLink to="/saved">
                            <img
                                className="profilePic"
                                src={iconSaved}
                                alt="My Rides"
                            />
                        </NavLink>
                        <NavLink to="/home">
                            <img
                                className="profilePic"
                                src={iconHome}
                                alt="Find a Ride"
                            />
                        </NavLink>
                        <NavLink to="/requests">
                            <img
                                className="profilePic"
                                src={iconRequests}
                                alt="Ride Requests"
                            />
                        </NavLink>
                    </>
                )}
            </nav>
        </>
    );
}
//  withRouter passes the closest routes match current location and history props to the wrapped component whenever it renders. simply connects component to the router.
export default withRouter(Nav);
