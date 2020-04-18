import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../../img/footer-icons/HomeIcon.png";
import HomeIconinverse from "../../img/footer-icons/HomeIcon-Inverse.png";

import "./Nav.scss";

export default function Nav() {
    return (
        <nav className="bottom-nav">
            <NavLink to="/">
                {" "}
                <img
                    className="profilePic"
                    src={HomeIconinverse}
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
                    src={HomeIcon}
                    alt="Patchy"
                    style={{
                        width: "40px",
                        height: "40px"
                    }}
                />
            </NavLink>
            <NavLink to="/">
                {" "}
                <img
                    className="profilePic"
                    src={HomeIconinverse}
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
