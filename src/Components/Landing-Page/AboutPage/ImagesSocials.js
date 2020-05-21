import React from "react";

const ImagesSocials = (props) => {
    return (
        <>
            <div className="img-container" data-testid="img-container">
                <img
                    className="over"
                    src={props.carpaller.cutieImg}
                    alt="CarPal cutie"
                />
                <img
                    className="under"
                    src={props.carpaller.profileImg}
                    alt={props.carpaller.name}
                />
            </div>

            <div className="socials" data-testid="socials">
                <a
                    href={props.carpaller.githubURL}
                    target="_blank"
                    data-testid="github-url"
                >
                    <i className="fab fa-github fa-3x"></i>
                </a>
                <a href={props.carpaller.linkedinURL} target="_blank">
                    <i className="fab fa-linkedin-in fa-3x"></i>
                </a>
            </div>
        </>
    );
};

export default ImagesSocials;
