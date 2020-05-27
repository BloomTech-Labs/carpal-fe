import React from "react";
import reverseGeocoder from "../../../Utils/reverseGeocoder";
import { useEffect } from "react";
import { useState } from "react";

function SavedRideCard(props) {
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    useEffect(() => {
        if (props.ride.start_location.lat && props.ride.start_location.long) {
            const startPoint = reverseGeocoder({
                lat: props.ride.start_location.lat,
                long: props.ride.start_location.long
            });
            const startAddress = Promise.resolve(startPoint);
            startAddress.then((resp) => {
                if (resp) {
                    const startStreet = resp.split(",");
                    setStart(startStreet[0]);
                }
            });
            const endPoint = reverseGeocoder({
                lat: props.ride.end_location.lat,
                long: props.ride.end_location.long
            });
            const endAddress = Promise.resolve(endPoint);
            endAddress.then((resp) => {
                if (resp) {
                    const endStreet = resp.split(",");
                    setEnd(endStreet[0]);
                }
            });
        }
    }, []);

    return (
        <div className="saved-card">
            <h3>
                {start} <br></br>
                To
                <br></br> {end}
            </h3>
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
