import React from "react";
import { NavLink, withRouter } from "react-router-dom";
//icons for footer-nav
import HomeIcon from "../../img/footer-icons/HomeIcon.png";
import FindRide from "../../img/footer-icons/RideRequest-Inverse.png";
import CarPalReq from "../../img/footer-icons/CarPalReq-Inverted.png";

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
                        <NavLink to="/signup">
                            <img
                                className="profilePic"
                                src={CarPalReq}
                                alt="Request"
                            />
                        </NavLink>
                        <NavLink to="/login">
                            <img
                                className="profilePic"
                                src={HomeIcon}
                                alt="Patchy"
                            />
                        </NavLink>
                        <NavLink to="/login">
                            <img
                                className="profilePic"
                                src={FindRide}
                                alt="Patchy"
                            />
                        </NavLink>
                    </>
                ) : (
                    // if you are a user you will be given this footer-navigation.
                    <>
                        <NavLink to="/profilepage">
                            <img
                                className="profilePic"
                                src={HomeIcon}
                                alt="Patchy"
                            />
                        </NavLink>
                        {/* link to finding/requesting a ride */}
                        <NavLink to="/home">
                            <img
                                className="profilePic"
                                src={FindRide}
                                alt="Patchy"
                            />
                        </NavLink>

                        {/* <NavLink to="/riderequest">
                            <img
                                className="profilePic"
                                src={RequestIcon}
                                alt="Request"
                            />
                        </NavLink> */}
                    </>
                )}
            </nav>
        </>
    );
}
//  withRouter passes the closest routes match current location and history props to the wrapped component whenever it renders. simply connects component to the router.
export default withRouter(Nav);
