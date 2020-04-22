import React, { useState } from "react";

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
                    className="dotExpander"
                >
                    ...
                </button>
                {isOutgoingRequestsOpen && <div>Outgoing Request 1</div>}
            </div>
        </>
    );
}
