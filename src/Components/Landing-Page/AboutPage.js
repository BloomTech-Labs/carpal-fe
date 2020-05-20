import React from "react";
import { AboutData } from "./AboutData";

import "./AboutPage.scss";

function AboutPage() {
    return (
        <div className="landing-page about-page">
            <h1 className="landing-header">Meet the CarPallers</h1>
            <section className="carpallers">
                {AboutData.map((carpaller) => {
                    return (
                        <div className="awesome-aliens-box">
                            <div className="left">
                                <h2>{carpaller.name}</h2>
                                <h3 className="team-title">
                                    {carpaller.title}
                                </h3>
                                <div className="hide-tablet show-desktop">
                                    <div className="img-container">
                                        <img
                                            className="over"
                                            src={carpaller.cutieImg}
                                            alt="CarPal cutie"
                                        />
                                        <img
                                            className="under"
                                            src={carpaller.profileImg}
                                            alt={carpaller.name}
                                        />
                                    </div>

                                    <div className="socials">
                                        <a
                                            href={carpaller.githubURL}
                                            target="_blank"
                                        >
                                            <i class="fab fa-github fa-3x"></i>
                                        </a>
                                        <a
                                            href={carpaller.linkedinURL}
                                            target="_blank"
                                        >
                                            <i class="fab fa-linkedin-in fa-3x"></i>
                                        </a>
                                    </div>
                                </div>

                                <p>{carpaller.bio}</p>
                            </div>
                            <div className="right  show-tablet hide-desktop">
                                <div className="img-container">
                                    <img
                                        className="over"
                                        src={carpaller.cutieImg}
                                        alt="CarPal cutie"
                                    />
                                    <img
                                        className="under"
                                        src={carpaller.profileImg}
                                        alt={carpaller.name}
                                    />
                                </div>
                                <div className="socials">
                                    <a
                                        href={carpaller.githubURL}
                                        target="_blank"
                                    >
                                        <i class="fab fa-github fa-3x"></i>
                                    </a>
                                    <a
                                        href={carpaller.linkedinURL}
                                        target="_blank"
                                    >
                                        <i class="fab fa-linkedin-in fa-3x"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>
        </div>
    );
}

export default AboutPage;
