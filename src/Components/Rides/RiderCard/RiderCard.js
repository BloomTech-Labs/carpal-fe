import React, { useState } from "react";
import RiderCardMapping from "./RiderCardMapping";
import "./RiderCard.scss";

export default function RiderCard(props) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
            {open ? (
                <div className="rideCardDiv">
                    {/* profile picture */}
                    <h2 data-testid="nameField">{props.name}</h2>
                    <button data-testid="detailsButton" onClick={handleClick}>
                        Details
                    </button>
                    <button /* onClick to send request to BE*/>Request</button>
                    <RiderCardMapping name="Hobbies" items={props.hobbies} />

                    <RiderCardMapping
                        name="Audio Likes"
                        items={props.audioLikes}
                    />

                    <RiderCardMapping
                        name="Audio Dislikes"
                        items={props.audioDislikes}
                    />
                </div>
            ) : (
                <div className="rideCardDiv">
                    {/* profile picture */}
                    <h2 data-testid="nameField">{props.name}</h2>
                    <button data-testid="detailsButton" onClick={handleClick}>
                        Details
                    </button>
                    <button /* onClick to send request to BE*/>Request</button>
                </div>
            )}
        </div>
    );
}
