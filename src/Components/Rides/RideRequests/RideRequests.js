import React, { useState, useEffect } from "react";
import RideRequestsCards from "../RideRequestsCard/RideRequestsCard";

import { connect } from "react-redux";
import {
    SetUserAction,
    CancelRideRequest
} from "../../../Redux/Actions/UserAction";

import "./RideRequests.scss";

function RideRequests(props) {
    const [user, setUser] = useState({});
    const [isIncomingRequestsOpen, setIsIncomingRequestsOpen] = useState(false);
    const [isOutgoingRequestsOpen, setIsOutgoingRequestsOpen] = useState(false);

    useEffect(() => {
        setUser({
            ...props.user
        });
    }, [props.user.incoming_ride_requests]);

    function cancelRequest(item) {
        let cancelConfirm = window.confirm(
            `Ride request to ${item.driver_name} is about to be canceled. Are you sure?`
        );
        if (cancelConfirm == true) {
            props.CancelRideRequest(item.ride_id);
        }
    }

    return (
        <>
            <div>
                <h3>Requests</h3>
            </div>
            {/* Conditionally Render Incoming Request only if User is a Driver*/}
            {user.is_driver && (
                <div>
                    <h3>Incoming</h3>
                    <button
                        onClick={() =>
                            setIsIncomingRequestsOpen(!isIncomingRequestsOpen)
                        }
                    >
                        ...
                    </button>
                    {isIncomingRequestsOpen && (
                        <div>
                            {props.user.incoming_ride_requests.map(
                                (requests, index) => (
                                    <RideRequestsCards
                                        key={index}
                                        incoming={true}
                                        user={props.user}
                                        index={index}
                                    />
                                )
                            )}
                        </div>
                    )}
                </div>
            )}
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
                        {props.user.outgoing_ride_requests.map(
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
        </>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    error: state.user.error
});

export default connect(mapStateToProps, { SetUserAction, CancelRideRequest })(
    RideRequests
);
