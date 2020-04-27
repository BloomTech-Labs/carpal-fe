import React, { useState, useEffect } from "react";
import RideRequestsCards from "../RideRequestsCard/RideRequestsCard";

import { connect } from "react-redux";
import { SetUserAction } from "../../../Redux/Actions/UserAction";

import "./RideRequests.scss";

function RideRequests(props) {
    const [user, setUser] = useState({});
    const [isIncomingRequestsOpen, setIsIncomingRequestsOpen] = useState(false);
    const [isOutgoingRequestsOpen, setIsOutgoingRequestsOpen] = useState(false);

    useEffect(() => {
        setUser({
            ...props.user
        });
    }, []);

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

export default connect(mapStateToProps, { SetUserAction })(RideRequests);
