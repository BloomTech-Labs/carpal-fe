import React, { useState } from "react";
import "./RideRequestsCard.scss";
import Patchy from "../../../img/logos/Patchyv2.0.png";

function RideRequestsCard(props) {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    function toggleDetails() {
        setIsDetailsOpen(!isDetailsOpen);
    }

    console.log(props, "props.request in card");
    return (
        <div>
            {props.incoming ? (
                <div className="incoming-request-card">
                    <div className="incoming-request-overview">
                        <div className="request-card-upper">
                            <img
                                className="profilePic"
                                src={Patchy}
                                alt="Patchy"
                            />
                            <h3>{props.requests.rider_name}</h3>
                            <h3>{props.requests.status}</h3>
                        </div>
                        <div className="request-card-lower">
                            <button onClick={toggleDetails}>Details</button>
                            {props.requests.status === "pending" ? (
                                <>
                                    <button
                                        onClick={() =>
                                            props.handleRequest({
                                                ride_id: props.requests.ride_id,
                                                request_id: props.requests.id,
                                                status: "accepted"
                                            })
                                        }
                                    >
                                        Accept
                                    </button>
                                    <button
                                        onClick={() =>
                                            props.handleRequest({
                                                ride_id: props.requests.ride_id,
                                                request_id: props.requests.id,
                                                status: "declined"
                                            })
                                        }
                                    >
                                        Decline
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() =>
                                        props.handleRequest({
                                            ride_id: props.requests.ride_id,
                                            request_id: props.requests.id,
                                            status: "declined"
                                        })
                                    }
                                >
                                    Decline
                                </button>
                            )}
                        </div>
                    </div>
                    {isDetailsOpen && (
                        <div className="request-card-details">
                            <h3>Hobbies</h3>
                            <h3>Audio I Like</h3>
                            <h3>Audio I Dislike</h3>
                        </div>
                    )}
                </div>
            ) : (
                <div className="outgoing-request-card">
                    <div className="outgoing-request-overview">
                        <img className="profilePic" src={Patchy} alt="Patchy" />
                        <div className="name-status">
                            <h3>{props.requests.driver_name}</h3>
                            <h3>{props.requests.status}</h3>
                        </div>

                        <div className="outgoing-request-card-bottom">
                            <button onClick={toggleDetails}>Details</button>

                            <button
                                onClick={() => props.cancel(props.requests)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                    {isDetailsOpen ? (
                        <div className="request-card-details">
                            <h3>Hobbies</h3>
                            <h3>Audio I Like</h3>
                            <h3>Audio I Dislike</h3>
                        </div>
                    ) : null}
                </div>
            )}
        </div>
    );
}

export default RideRequestsCard;
