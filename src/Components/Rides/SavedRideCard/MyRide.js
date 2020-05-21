import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createRide } from "../../../Redux/Actions/UserAction";
import geocode from "../../../Utils/geocoder";
import "./MyRide.scss";

function MyRide(props) {
    const [ride, setRide] = useState(props.rides);

    const handleChange = (e) => {
        setRide({
            ...ride,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createRide(props.rideCreated);
    };

    useEffect(() => {
        props.rides && setRide(props.rides);
    }, [props.rides]);

    useEffect(() => {
        geocode(ride);
    }, [ride]);

    return (
        <div className="myride-container">
            <div className="myride-header">
                <h2>My Rides</h2>
            </div>
            <form>
                <button className="add-button">Add Ride +</button>
                <input
                    type="text"
                    name="startLocation"
                    value={ride.startLocation}
                    onChange={handleChange}
                ></input>
                <input
                    type="text"
                    name="endLocation"
                    value={ride.endLocation}
                    onChange={handleChange}
                ></input>
            </form>
            <button className="btn edit">Edit</button>
            <button className="btn delete">Delete</button>
            <button className="btn start" onClick={handleSubmit}>
                Start
            </button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    rideCreated: state.user.user.rideCreator
});
export default connect(mapStateToProps, { createRide })(MyRide);
