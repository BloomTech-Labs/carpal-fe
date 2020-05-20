import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createRide } from "../../../Redux/Actions/UserAction";
import geocode from "../../../Utils/geocoder";
//need to search all drivers locations
function MyRide(props) {
    const [ride, setRide] = useState({
        startLocation: "",
        endLocation: ""
    });

    const handleChange = (e) => {
        setRide({
            ...ride,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createRide(props.rideCreated);
        console.log(props.rideCreated);
    };

    useEffect(() => {
        console.log(props.rides);
        props.rides && setRide(props.rides);
    }, [props.rides]);

    useEffect(() => {
        geocode(ride);
    }, [ride]);
    // not passing props how we want. we need ridesLocation info to populate
    return (
        <div className="myride-container">
            <div className="myride-header">
                <h2>My Rides</h2>
            </div>
            <form>
                <button className="add-button">Add Ride +</button>
                <input
                    type="text"
                    name="start"
                    value={ride.startLocation}
                    onChange={handleChange}
                ></input>
                <input
                    type="text"
                    name="end"
                    value={ride.endLocation}
                    onChange={handleChange}
                ></input>
            </form>
            <button>Edit</button>
            <button>Delete</button>
            <button onClick={handleSubmit}>Start</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    rideCreated: state.user.user.rideCreator
});
export default connect(mapStateToProps, { createRide })(MyRide);
