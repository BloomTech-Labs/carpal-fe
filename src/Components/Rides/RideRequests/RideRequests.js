import React, { useState, useEffect } from "react";
import RideRequestsCards from "../RideRequestsCard/RideRequestsCard";

import "./RideRequests.scss";

import { connect } from "react-redux";

import { SetUserAction } from "../../../Redux/Actions/UserAction";

function RideRequests(props) {
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser({
            ...props.user
        });
    }, []);

    const [isIncomingRequestsOpen, setIsIncomingRequestsOpen] = useState(false);
    const [isOutgoingRequestsOpen, setIsOutgoingRequestsOpen] = useState(false);

    console.log(isIncomingRequestsOpen, isOutgoingRequestsOpen);
    return (
        <>
            <div>
                <h3>Requests</h3>
            </div>
            {user.isDriver && (
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
                            <RideRequestsCards />
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
                        <RideRequestsCards />
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
