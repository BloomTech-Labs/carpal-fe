import React from "react";

function SavedRideCard(props) {
    return (
        <div className="saved-card">
            <h3>{props.ride.id}</h3>
            {/* <button className="btn edit" onClick={() => props.handleRideEdit()}>
                Edit
            </button> */}
            <button
                className="btn delete"
                onClick={() => props.handleRideDelete(props.ride.id)}
            >
                Delete
            </button>
            <button
                className="btn start"
                onClick={() => props.handleRideStart(props.ride)}
            >
                Start
            </button>
        </div>
    );
}

export default SavedRideCard;
