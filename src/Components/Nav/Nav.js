import React from "react";
import { NavLink } from "react-router-dom";
//icons for nav
import HomeIcon from "../../img/footer-icons/HomeIcon.png";
import CarPalReq from "../../img/footer-icons/CarPalReq-Inverted.png";
import FindRide from "../../img/footer-icons/RideRequest-Inverse.png";

import "./Nav.scss";

export default function Nav() {
    const userAuthorized = localStorage.getItem("token");
    return (
        <>
            <nav className="bottom-nav">
                {/* home path */}
                {!userAuthorized ? (
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
                    </>
                ) : (
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
                        {/* // path to request a ride */}
                        <NavLink to="/home">
                            <img
                                className="profilePic"
                                src={FindRide}
                                alt="Request"
                                style={{
                                    width: "40px",
                                    height: "40px"
                                }}
                            />
                        </NavLink>
                        {/* // path to search for a ride */}
                        <NavLink to="/riderequest">
                            <img
                                className="profilePic"
                                src={CarPalReq}
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
