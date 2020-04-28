import React from "react";
import { NavLink, withRouter } from "react-router-dom";
//icons for footer-nav
import HomeIcon from "../../img/footer-icons/HomeIcon.png";
import FindRide from "../../img/footer-icons/RideRequest-Inverse.png";
import CarPalReq from "../../img/footer-icons/CarPalReq-Inverted.png";

import "./Nav.scss";

function Nav() {
    const isAuthenticated = localStorage.getItem("token");

    return (
        <>
            <nav className="bottom-nav">
                {!isAuthenticated ? (
                    <>
                        <NavLink to="/riderequest">
                            <img
                                className="profilePic"
                                src={CarPalReq}
                                alt="Request"
                                style={{
                                    width: "40px",
                                    height: "40px"
                                }}
                            />
                        </NavLink>
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

                        {/* <NavLink to="/riderequest">
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
                    </>
                )}
            </nav>
        </>
    );
}

export default withRouter(Nav);
