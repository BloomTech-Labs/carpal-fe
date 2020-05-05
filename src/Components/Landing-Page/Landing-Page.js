import React from "react";
import Slider from "../../img/CarPal.mp4";
import Imgone from "../../img/logos/happy-cutie.png";
import Imgtwo from "../../img/logos/cutie-in-car.png";
import Imgthree from "../../img/logos/cuties-duo-in-car.png";
// import dashboard from "../../App";
import { Link } from "react-router-dom";

import "./Landing-Page.scss";

function LandingPage() {
    return (
        <div className="landing-page main-container">
            <section className="hero">
                <video className="slider" autoPlay loop>
                    <source src={Slider} type="video/mp4" />
                </video>
                <Link className="overlaybutton btn" to="/Signup">
                    Sign Up
                </Link>
            </section>
            <section className="main">
                <div className="intro">
                    <h1 data-testid="welcomeh1" className="introTitle">
                        Welcome to CarPal
                    </h1>
                    <p data-testid="firstptag">
                        The future of networking and commuting at the same time.
                        With Carpal you will be able to join a community of
                        drivers and riders who are looking to save money, lessen
                        their impact on the enviorment, and gain a friend along
                        the way.
                    </p>
                </div>
                <section className="features">
                    <div id="first" className="flex-container features-box">
                        <div className="flex-three-quarters">
                            <h2 data-testid="h2tag1">Features</h2>
                            <img
                                role="image"
                                className="allimg hide-tablet"
                                src={Imgone}
                                alt="CarPal cutie"
                            />
                            <p>
                                With this awesome app, these are just a few of
                                the features you will get such as SMS messaging,
                                friends list, gamification (user stats and point
                                system) and even driver's real-time location,
                                but wait there's more and its just five clicks
                                away front becoming a Carpaller.
                            </p>
                        </div>
                        <div className="flex-quarter">
                            <img
                                role="image"
                                className="allimg show-tablet"
                                src={Imgone}
                                alt="CarPal cutie"
                            />
                        </div>
                    </div>

                    <div id="second" className="flex-container features-box">
                        <div className="flex-three-quarters">
                            <h2 data-testid="h2tag2">Drivers</h2>
                            <img
                                role="image"
                                className="allimg hide-tablet"
                                src={Imgtwo}
                                alt="CarPal cutie"
                            />
                            <p>
                                Are you a current driver who loves to drive or
                                even hates to drive, well guess what you in
                                luck. The Carpal developer kept you in mind when
                                building this app I might even add that they
                                made it just for you.
                            </p>
                        </div>
                        <div className="flex-quarter">
                            <img
                                className="allimg show-tablet"
                                src={Imgtwo}
                                alt="CarPal cutie"
                            />
                        </div>
                    </div>

                    <div id="third" className="flex-container features-box">
                        <div className="flex-three-quarters">
                            <h2 data-testid="h2tag3">Riders</h2>
                            <img
                                role="image"
                                className="allimg hide-tablet"
                                src={Imgthree}
                                alt="CarPal cutie"
                            />
                            <p>
                                As a rider you gain many great features and here
                                are just a few of those. Request a ride to your
                                destination, customize the type of driver you
                                are interested in meet, and rate each Carpal
                                experience to make sure our community stays the
                                best in the business.
                            </p>
                        </div>
                        <div className="flex-quarter">
                            <img
                                className="allimg show-tablet"
                                src={Imgthree}
                                alt="CarPal Cutie"
                            />
                        </div>
                    </div>
                </section>
            </section>

            <section className="sign-up">
                <h2>Ready to goooooooo?</h2>
                <Link className="btn" to="/Signup">
                    Sign Up
                </Link>
            </section>
        </div>
    );
}

export default LandingPage;
