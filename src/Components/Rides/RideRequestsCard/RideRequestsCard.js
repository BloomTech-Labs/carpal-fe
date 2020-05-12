import React, { useState } from "react";
import "./RideRequestsCard.scss";
import Patchy from "../../../img/logos/Patchyv2.0.png";
import UserDetail from "../../Profile-Pages/userDetail";

function RideRequestsCard(props) {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    function toggleDetails() {
        setIsDetailsOpen(!isDetailsOpen);
    }
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
                            <UserDetail
                                title="Hobbies"
                                item={props.requests.hobbies}
                            />

                            <UserDetail
                                title="Audio I love"
                                item={props.requests.audio_likes}
                            />

                            <UserDetail
                                title="Audio I hate"
                                item={props.requests.audio_dislikes}
                            />
                        </div>
                    )}
                </div>
            ) : (
                <div className="outgoing-request-card">
                    <div className="outgoing-request-overview">
                        <div className="request-card-upper">
                            <img
                                className="profilePic"
                                src={Patchy}
                                alt="Patchy"
                            />
                            <h3>{props.requests.driver_name}</h3>
                            <h3>{props.requests.status}</h3>
                        </div>
                        <div className="request-card-lower">
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
                            <UserDetail
                                title="Hobbies"
                                item={props.requests.hobbies}
                            />

                            <UserDetail
                                title="Audio I love"
                                item={props.requests.audio_likes}
                            />

                            <UserDetail
                                title="Audio I hate"
                                item={props.requests.audio_dislikes}
                            />
                        </div>
                    ) : null}
                </div>
            )}
        </div>
    );
}

export default RideRequestsCard;
