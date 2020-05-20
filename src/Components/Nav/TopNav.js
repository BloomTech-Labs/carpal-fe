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
            <Link className="nav-link-carpal" to="/">
                CarPal
            </Link>
            {/* Anything in this NAV is within the Hamburger Menu */}
            <nav
                className="hamburger-nav"
                id="hamburger-nav"
                onClick={hideElement}
            >
                {!loggedIn ? (
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/about">Meet the Team</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </>
                ) : (
                    <>
                        <Link to="/home">Find a Ride</Link>
                        <Link to="/profilepage">Profile</Link>
                        <Link to="/saved">Saved Rides</Link>
                        <Link to="/requests">Requests</Link>
                        <Link to="/">Home</Link>
                        <Link to="/about">Meet the Team</Link>
                        <Link to="/logout">Logout</Link>
                    </>
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
