import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login-SignUp/Login";
import SignUp from "../Login-SignUp/SignUp";
// import "./TopNav.scss";

export default function TopNav() {
    // temp hamburger animation
    const hideElement = event => {
        event.preventDefault();
        let hamburger = document.getElementById("hamburger");
        let topnav = document.getElementById("top-nav");
        hamburger.classList.toggle("change");
        topnav.classList.toggle("show");
    };

    return (
        <>
            <Link to="/">CarPal</Link>
            <nav className="top-nav" id="top-nav">
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </nav>

            <button onClick={hideElement} className="hamburger" id="hamburger">
                <div className="navicon bar1"></div>
                <div className="navicon bar2"></div>
                <div className="navicon bar3"></div>
                <div className="hidden-text">Menu</div>
            </button>
        </>
    );
}
