import React from "react";
import { Link, withRouter } from "react-router-dom";
import Patchy from "../../img/logos/Patchyv2.0.png";

import "./TopNav.scss";

function TopNav() {
    const loggedIn = localStorage.getItem("token");

    // temp hamburger animation
    const hideElement = (event) => {
        event.preventDefault();
        let hamburger = document.getElementById("hamburger");
        let topnav = document.getElementById("hamburger-nav");
        hamburger.classList.toggle("change");
        topnav.classList.toggle("show");
    };

    return (
        <div className="top-nav">
            <Link to="/profilepage">
                <img className="profilePic" src={Patchy} alt="Patchy" />
            </Link>
            <Link to="/">CarPal</Link>
            {/* Anything in this NAV is within the Hamburger Menu */}
            <nav
                className="hamburger-nav"
                id="hamburger-nav"
                onClick={hideElement}
            >
                {!loggedIn ? (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </>
                ) : (
                    <Link to="/logout">Logout</Link>
                )}
            </nav>

            <button onClick={hideElement} className="hamburger" id="hamburger">
                <div className="navicon bar1"></div>
                <div className="navicon bar2"></div>
                <div className="navicon bar3"></div>
                <div className="hidden-text">Menu</div>
            </button>
        </div>
    );
}

export default withRouter(TopNav);
