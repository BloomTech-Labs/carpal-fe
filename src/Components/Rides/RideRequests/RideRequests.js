import React, { useState, useEffect } from "react";
import RideRequestsCards from "../RideRequestsCard/RideRequestsCard";

import { connect } from "react-redux";
import {
    SetUserAction,
    CancelRideRequest,
    handleIncomingRideRequest,
    handleOutgoingRideRequest
} from "../../../Redux/Actions/UserAction";

import "./RideRequests.scss";

function RideRequests(props) {
    const [user, setUser] = useState({});
    const [isIncomingRequestsOpen, setIsIncomingRequestsOpen] = useState(false);
    const [isOutgoingRequestsOpen, setIsOutgoingRequestsOpen] = useState(false);

    useEffect(() => {
        //previously subscribed to - props.user.incoming_ride_requests

        props.handleIncomingRideRequest();
        props.handleOutgoingRideRequest();
        setUser({
            ...props.user
        });
    }, []);

    function cancelRequest(item) {
        let cancelConfirm = window.confirm(
            `Ride request to ${item.driver_name} is about to be canceled. Are you sure?`
        );
        if (cancelConfirm == true) {
            props.CancelRideRequest({ request_id: item.id });
        }
    }
    return (
        <div className="ride-request">
            <h1>Requests</h1>
            {/* Conditionally Render Incoming Request only if User is a Driver*/}
            {user.is_driver && (
                <div className="incoming-requests">
                    <h2>Incoming</h2>
                    <button
                        onClick={() =>
                            setIsIncomingRequestsOpen(!isIncomingRequestsOpen)
                        }
                    >
                        ...
                    </button>
                    {isIncomingRequestsOpen && (
                        <div>
                            {props.user.incoming_ride_requests[0].data.map(
                                (requests, index) => (
                                    <RideRequestsCards
                                        key={index}
                                        incoming={true}
                                        requests={requests}
                                        index={index}
                                        handleRequest={props.handleRideRequest}
                                    />
                                )
                            )}
                        </div>
                    )}
                </div>
            )}
            <div className="outgoing-requests">
                <h2>Outgoing</h2>
                <button
                    onClick={() =>
                        setIsOutgoingRequestsOpen(!isOutgoingRequestsOpen)
                    }
                >
                    ...
                </button>
                {isOutgoingRequestsOpen && (
                    <div>
                        {console.log(props.user)}
                        {props.user.outgoing_ride_requests[0].data.map(
                            (requests, index) => (
                                <RideRequestsCards
                                    key={index}
                                    user={props.user}
                                    index={index}
                                    requests={requests}
                                    cancel={cancelRequest}
                                />
                            )
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    error: state.user.error
});

export default connect(mapStateToProps, {
    SetUserAction,
    CancelRideRequest,
    handleIncomingRideRequest,
    handleOutgoingRideRequest
})(RideRequests);
