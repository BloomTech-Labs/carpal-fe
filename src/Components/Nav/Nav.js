import React from "react";
import { NavLink } from "react-router-dom";
//icons for nav
import HomeIcon from "../../img/footer-icons/HomeIcon.png";
import homeIconInverse from "../../img/footer-icons/HomeIcon-Inverse.png";
import PalReq from "../../img/footer-icons/CarPalReq-Inverted.png";
import FindRide from "../../img/footer-icons/RideRequest-Inverse.png";
import RequestIcon from "../../img/footer-icons/CarPalReq2-Inverted.png";

import "./Nav.scss";

export default function Nav(props) {
    const UserType = (auth) => {
        return auth.isAuthenticated ? (
            <nav className="bottom-nav">
                <p>footer logged in{auth.first_name}</p>
                {/* home path */}
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
                {/* path to search for a ride */}
                <NavLink to="/ridefind">
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
                {/* path to request a ride */}
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
                </NavLink>
            </nav>
        ) : (
            <nav className="bottom-nav">
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
            </nav>
        );
    };
    return (
        <nav className="bottom-nav">
            <p
                style={{
                    color: "#ffffff",
                    fontSize: "large"
                }}
            >
                not logged in
            </p>
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

            <NavLink to="/dashboard">
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
        </nav>
    );
}
//Typo in static class property declaration  (error message when uncommented.)
// Nav.PropTypes : {
//     auth: React.PropTypes.object.isRequired
// };
