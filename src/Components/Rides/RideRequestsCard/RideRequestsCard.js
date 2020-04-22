import React from "react";

import "./RideRequestsCard.scss";
import Patchy from "../../../img/logos/Patchyv2.0.png";

function RideRequestsCard(props) {
    return (
        <div className="ride-request-card">
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
    );
}

export default RideRequestsCard;
