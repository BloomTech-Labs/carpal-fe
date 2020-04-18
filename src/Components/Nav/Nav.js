import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../../img/footer-icons/HomeIcon.png";
import homeIconInverse from "../../img/footer-icons/HomeIcon-Inverse.png";

import "./Nav.scss";

export default function Nav(props) {
    const RiderOrDriver = (auth) => {
        return auth.isAuthenticated ? (
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
                <p>footer logged in{auth.first_name}</p>
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
            <p
                style={{
                    color: "#ffffff",
                    fontSize: "large"
                }}
            >
                not logged in
            </p>
        </nav>
    );
}

// Nav.PropTypes = {
//     auth: React.PropTypes.object.isRequired
// };
