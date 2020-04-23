import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.scss";

export default function Nav() {
    return (
        <nav className="bottom-nav">
            {/* <NavLink className="fas fa-car" to="/" /> */}
            <NavLink className="fas fa-home" to="/dashboard" />
            {/* <NavLink className="fas fa-comments" to="/" /> */}
        </nav>
    );
}
