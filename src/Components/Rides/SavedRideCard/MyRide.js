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

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // props.createRide(props.rideCreated);
    // };

    useEffect(() => {
        props.rides && setRide(props.rides);
    }, [props.rides]);

    useEffect(() => {
        geocode(ride);
    }, [ride]);

    return (
        <div data-testid="myRideContainer" className="myride-container">
            <div data-testid="myRideHeader" className="myride-header">
                <h2 data-testid="myRideH2">My Rides</h2>
            </div>
            <form>
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
        </div>
    );
}

const mapStateToProps = (state) => ({
    rideCreated: state.user.user.rideCreator
});
export default connect(mapStateToProps, { createRide })(MyRide);
