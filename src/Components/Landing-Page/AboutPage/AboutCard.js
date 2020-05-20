import React from "react";
import ImagesSocials from "./ImagesSocials";

const AboutCard = (props) => {
    return (
        <div className="awesome-aliens-box" data-testid="awesome-aliens-box">
            <div className="left" data-testid="left">
                <h2 data-testid="carpaller-name">{props.carpaller.name}</h2>
                <h3 className="team-title">{props.carpaller.title}</h3>
                <div className="hide-tablet show-desktop">
                    <ImagesSocials carpaller={props.carpaller} />
                </div>

                <p>{props.carpaller.bio}</p>
            </div>
            <div className="right show-tablet hide-desktop" data-testid="right">
                <ImagesSocials carpaller={props.carpaller} />
            </div>
        </div>
    );
};

export default AboutCard;
