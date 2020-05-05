import React, { useState } from "react";
import "./RideRequestsCard.scss";
import Patchy from "../../../img/logos/Patchyv2.0.png";

function RideRequestsCard(props) {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    function toggleDetails() {
        setIsDetailsOpen(!isDetailsOpen);
    }

    console.log(props.requests, "props.request in card");
    return (
        <div>
            {props.incoming ? (
                <div className="incoming-request-card">
                    <div>
                        <div>
                            <img
                                className="profilePic"
                                src={Patchy}
                                alt="Patchy"
                            />
                            <h3>{props.requests.rider_name}</h3>
                        </div>
                        <div>
                            <button onClick={toggleDetails}>Details</button>
                            <button
                                onClick={() =>
                                    props.handleRequest(
                                        props.requests.ride_id,
                                        "accepted"
                                    )
                                }
                            >
                                Accept
                            </button>
                            <button
                                onClick={() =>
                                    props.handleRequest(
                                        props.requests.ride_id,
                                        "declined"
                                    )
                                }
                            >
                                Decline
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
            ) : (
                <div className="outgoing-request-card">
                    <div>
                        <div>
                            <img
                                className="profilePic"
                                src={Patchy}
                                alt="Patchy"
                            />
                        </div>
                        <div>
                            <h3>Driver Name</h3>
                            <h3>{props.requests.status}</h3>
                        </div>

                        <div className="outgoing-request-card-bottom">
                            <div>
                                <button onClick={toggleDetails}>Details</button>

                                <button
                                    onClick={() => props.cancel(props.requests)}
                                >
                                    Cancel
                                </button>
                            </div>
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
