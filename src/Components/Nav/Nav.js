import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../../Img/footer-icons/HomeIcon.png";
import homeIconInverse from "../../Img/footer-icons/HomeIcon-Inverse.png";
import PalReq from "../../Img/footer-icons/CarPalReq-Inverted.png";
import FindRide from "../../Img/footer-icons/RideRequest-Inverse.png";
import RequestIcon from "../../Img/footer-icons/CarPalReq2-Inverted.png";

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
                <NavLink to="/rideFind">
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
                <NavLink to="/rideRequest">
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
            <NavLink to="/dashboard">
                <img
                    className="profilePic"
                    src={homeIconInverse}
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
                    src={PalReq}
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
