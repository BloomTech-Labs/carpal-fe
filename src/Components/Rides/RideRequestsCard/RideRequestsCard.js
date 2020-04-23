import React from "react";

import "./RideRequestsCard.scss";
import Patchy from "../../../img/logos/Patchyv2.0.png";

function RideRequestsCard(props) {
    return (
        <div>
            {props.incoming ? (
                <div className="outgoing-request-card">
                    <div>
                        <img className="profilePic" src={Patchy} alt="Patchy" />
                    </div>
                    <div>
                        <div>Requestor Name</div>
                        <div>Request Status</div>
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
                        <h2>Requestor Name</h2>
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
