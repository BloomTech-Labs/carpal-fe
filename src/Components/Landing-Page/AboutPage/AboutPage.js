import React from "react";
import { AboutData } from "./AboutData";

import AboutCard from "./AboutCard";

import "./AboutPage.scss";

function AboutPage() {
    return (
        <div className="landing-page about-page">
            <h1 className="landing-header" data-testid="about-header">
                Meet the CarPallers
            </h1>
            <section className="carpallers" data-testid="carpallers-section">
                {AboutData.map((carpaller) => {
                    return (
                        <AboutCard key={carpaller.name} carpaller={carpaller} />
                    );
                })}
            </section>
        </div>
    );
}

export default AboutPage;
