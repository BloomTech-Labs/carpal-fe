import React, { useState } from "react";
import RiderCardMapping from "./RiderCardMapping";
import "./RiderCard.scss";
import Api from "./../../../Utils/Api";
export default function RiderCard(props) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
        console.log(props);
    };

    const makeRequest = (e) => {
        e.preventDefault();
        console.log(props);
        Api()
            .post("/rides/requests", {
                ride_id: props.ride_id,
                status: "pending"
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err.message);
            });
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
                    {/*  */}
                    <button /* onClick to send request to BE*/
                        onClick={makeRequest}
                    >
                        Request
                    </button>
                </div>
            )}
        </div>
    );
}
