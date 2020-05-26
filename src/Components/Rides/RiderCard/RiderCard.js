import React, { useState } from "react";
import UserDetail from "../../Profile-Pages/userDetail";
import { useHistory } from "react-router-dom";
import "./RiderCard.scss";
import Api from "./../../../Utils/Api";

function RiderCard(props) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
        props.setStops([
            [props.ride.start_location.long, props.ride.start_location.lat],
            [props.ride.end_location.long, props.ride.end_location.lat]
        ]);
    };

    const makeRequest = () => {
        const payload = {
            ride_id: props.ride_id,
            status: "pending",
            rider_end_lat: props.stops[1][1],
            rider_end_long: props.stops[1][0],
            rider_start_lat: props.stops[0][1],
            rider_start_long: props.stops[0][0]
        };
        props.createRideRequest(payload, props.history);
    };

    return (
        <div>
            {open ? (
                <div className={open ? "rideCardDiv selected" : "rideCardDiv"}>
                    {/* profile picture */}
                    <h2 data-testid="nameField">{props.name}</h2>
                    <button data-testid="detailsButton" onClick={handleClick}>
                        Details
                    </button>
                    <button onClick={makeRequest}>Request</button>
                    <div className="request-card-details" data-testid="riderUl">
                        <UserDetail title="Hobbies" item={props.ride.hobbies} />

                        <UserDetail
                            title="Audio I love"
                            item={props.ride.audio_likes}
                        />

                        <UserDetail
                            title="Audio I hate"
                            item={props.ride.audio_dislikes}
                        />
                    </div>
                </div>
            ) : (
                <div className="rideCardDiv">
                    {/* profile picture */}
                    <h2 data-testid="nameField">{props.name}</h2>

                    <button data-testid="detailsButton" onClick={handleClick}>
                        Details
                    </button>
                </div>
            )}
        </div>
    );
}

export default RiderCard;
