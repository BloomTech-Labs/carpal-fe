import React, { useState } from "react";
import "./RideRequestsCard.scss";
import Patchy from "../../../img/logos/Patchyv2.0.png";
import UserDetail from "../../Profile-Pages/userDetail";

function RideRequestsCard(props) {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const requestCardDetails = (
        <div className="request-card-details">
            <UserDetail title="Hobbies" item={props.requests.hobbies} />

            <UserDetail
                title="Audio I love"
                item={props.requests.audio_likes}
            />

            <UserDetail
                title="Audio I hate"
                item={props.requests.audio_dislikes}
            />
        </div>
    );

    function handleRequest(statusType) {
        props.handleRequest({
            ride_id: props.requests.ride_id,
            request_id: props.requests.id,
            status: statusType
        });
    }

    function toggleDetails() {
        setIsDetailsOpen(!isDetailsOpen);
    }
    return (
        <div>
            {props.incoming ? (
                <div
                    className={
                        isDetailsOpen
                            ? "incoming-request-card selected"
                            : "incoming-request-card"
                    }
                >
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
                                    <button onClick={() => handleRequest("accepted")}>
                                        Accept
                                    </button>
                                    <button onClick={() => handleRequest("decline")}>
                                        Decline
                                    </button>
                                </>
                            ) : (
                                <button onClick={() => handleRequest("declined")}>
                                    Decline
                                </button>
                            )}
                        </div>
                    </div>
                    {isDetailsOpen && requestCardDetails}
                </div>
            ) : (
                <div
                    className={
                        isDetailsOpen
                            ? "outgoing-request-card selected"
                            : "outgoing-request-card"
                    }
                >
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
                    {isDetailsOpen ? requestCardDetails : null}
                </div>
            )}
        </div>
    );
}
export default RideRequestsCard;
