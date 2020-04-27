import React from "react";

import "./RideRequestsCard.scss";
import Patchy from "../../../img/logos/Patchyv2.0.png";

function RideRequestsCard(props) {
    let outgoingRequests = props.user.outgoing_ride_requests;
    let incomingRequests = props.user.incoming_ride_requests;

    return (
        <div>
            {props.incoming ? (
                <div className="outgoing-request-card">
                    <div>
                        <img className="profilePic" src={Patchy} alt="Patchy" />
                    </div>
                    <div>
                        <h3>{outgoingRequests[props.index].driver_name}</h3>
                        <h3>{outgoingRequests[props.index].status}</h3>
                    </div>
                    <div>
                        <button>Details</button>
                        <button>Cancel</button>
                    </div>
                </div>
            ) : (
                <div className="incoming-request-card">
                    <div>
                        <img className="profilePic" src={Patchy} alt="Patchy" />
                        <h3>{incomingRequests[props.index].rider_name}</h3>
                    </div>
                    <div className="incoming-request-card-bottom">
                        <div>
                            <button>Details</button>
                            <button>Accept</button>
                            <button>Decline</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RideRequestsCard;
