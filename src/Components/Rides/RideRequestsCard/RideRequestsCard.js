import React, { useState } from "react";
import "./RideRequestsCard.scss";
import Patchy from "../../../img/logos/Patchyv2.0.png";

function RideRequestsCard(props) {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    let outgoingRequests = props.user.outgoing_ride_requests;
    let incomingRequests = props.user.incoming_ride_requests;

    function toggleDetails() {
        setIsDetailsOpen(!isDetailsOpen);
    }
    return (
        <div>
            {props.incoming ? (
                <div className="outgoing-request-card">
                    <div>
                        <div>
                            <img
                                className="profilePic"
                                src={Patchy}
                                alt="Patchy"
                            />
                            <h3>{incomingRequests[props.index].rider_name}</h3>
                        </div>
                        <div className="incoming-request-card-bottom">
                            <div>
                                <button onClick={toggleDetails}>Details</button>
                                <button>Accept</button>
                                <button>Decline</button>
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
            ) : (
                <div className="incoming-request-card">
                    <div>
                        <div>
                            <img
                                className="profilePic"
                                src={Patchy}
                                alt="Patchy"
                            />
                        </div>
                        <div>
                            <h3>{outgoingRequests[props.index].driver_name}</h3>
                            <h3>{outgoingRequests[props.index].status}</h3>
                        </div>
                        <div>
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
