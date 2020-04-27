import React from "react";
import { NavLink, withRouter } from "react-router-dom";
//icons for nav
import HomeIcon from "../../img/footer-icons/HomeIcon.png";
// import homeIconInverse from "../../img/footer-icons/HomeIcon-Inverse.png";
// import PalReq from "../../img/footer-icons/CarPalReq-Inverted.png";
import FindRide from "../../img/footer-icons/RideRequest-Inverse.png";
import RequestIcon from "../../img/footer-icons/CarPalReq2-Inverted.png";

import "./Nav.scss";

function Nav() {
    const isAuthenticated = localStorage.getItem("token");
    return (
        <>
            <nav className="bottom-nav">
                {/* home path */}
                {!isAuthenticated ? (
                    <>
                        <NavLink to="/dashboard">
                            <img
                                className="profilePic"
                                src={HomeIcon}
                                alt="Patchy"
                                style={{
                                    width: "40px",
                                    height: "40px"
                                }}
                            />
                        </NavLink>
                        {/* path to request a ride
                        <NavLink to="/riderequest">
                            <img
                                className="profilePic"
                                src={RequestIcon}
                                alt="Request"
                                style={{
                                    width: "40px",
                                    height: "40px"
                                }}
                            />
                        </NavLink> */}
                        {/* path to search for a ride */}
                        <NavLink to="/home">
                            <img
                                className="profilePic"
                                src={FindRide}
                                alt="Patchy"
                                style={{
                                    width: "40px",
                                    height: "40px"
                                }}
                            />
                        </NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to="/">
                            <img
                                className="profilePic"
                                src={HomeIcon}
                                alt="Patchy"
                                style={{
                                    width: "40px",
                                    height: "40px"
                                }}
                            />
                        </NavLink>

                        <NavLink to="/home">
                            <img
                                className="profilePic"
                                src={FindRide}
                                alt="Patchy"
                                style={{
                                    width: "40px",
                                    height: "40px"
                                }}
                            />
                        </NavLink>
                    </>
                )}
            </nav>
        </>
    );
}

export default withRouter(Nav);
