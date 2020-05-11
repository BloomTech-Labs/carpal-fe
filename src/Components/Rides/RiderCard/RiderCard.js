import React, { useState } from "react";
import RiderCardMapping from "./RiderCardMapping";
import { useHistory } from "react-router-dom";
import "./RiderCard.scss";
import Api from "./../../../Utils/Api";


export default function RiderCard(props) {
    console.log(props)
    const [open, setOpen] = useState(false);
    const history = useHistory();

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
                history.push("/requests")
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
