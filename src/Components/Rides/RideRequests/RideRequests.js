import React, { useState } from "react";
import RideRequestsCards from "../RideRequestsCard/RideRequestsCard";

import "./RideRequests.scss";

export default function RideRequests(props) {
    const [isIncomingRequestsOpen, setIsIncomingRequestsOpen] = useState(false);
    const [isOutgoingRequestsOpen, setIsOutgoingRequestsOpen] = useState(false);

    return (
        <>
            <div>
                <h3>Requests</h3>
            </div>
            <div>
                <h3>Incoming</h3>
                <button
                    onClick={() =>
                        setIsIncomingRequestsOpen(!isIncomingRequestsOpen)
                    }
                >
                    ...
                </button>
                {isIncomingRequestsOpen && <div>Incoming Request 1</div>}
            </div>

            <div>
                <div>Outgoing</div>
                <button
                    onClick={() =>
                        setIsOutgoingRequestsOpen(!isOutgoingRequestsOpen)
                    }
                >
                    ...
                </button>
                {isOutgoingRequestsOpen && (
                    <div>
                        <RideRequestsCards />
                    </div>
                )}
            </div>
        </>
    );
}
