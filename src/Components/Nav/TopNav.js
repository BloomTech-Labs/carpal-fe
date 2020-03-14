import React from "react";
import { NavLink } from "react-router-dom";
// import "./TopNav.scss";

export default function TopNav() {
    // temp hamburger animation
    const hideElement = event => {
        event.preventDefault();
        let element = document.getElementById("hamburger");
        element.classList.toggle("change");
    };

    return (
        <>
            <nav className="top-nav" id="top-nav">
                <NavLink to="/">CarPal</NavLink>
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
