import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

//need to search all drivers locations
function MyRide(props) {
    const [startLocationID, setStartLocationID] = useState();
    const [endLocationID, setEndLocationID] = useState();
    // const [ride, setRide] = useState({
    //     start: 0,
    //     end: 0
    // });

    // const handleChange = (e) => {
    //     setRide({
    //         ...ride,
    //         [e.target.name]: e.target.value
    //   };

    // useEffect(() => {
    //     setRide({
    //         ...ride,
    //         end: endLocationID,
    //         start: startLocationID
    //     });
    // }, [startLocationID, endLocationID]);

    console.log(props.createdRide);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(props.createdRide);
    };

    return (
        <div className="myride-container">
            <div>
                <h2>My Rides</h2>
                {/* <button className="add-button"> Add Ride +</button> */}
            </div>

            <form>
                {/* setEndLocationID() */}
                <button
                    className="add-button"
                    // onClick={() => setStartLocationID()}
                >
                    Add Ride +
                </button>
                <input
                    type="text"
                    name="start"
                    placeholder="Start Location ID"
                    // onChange={handleChange}
                >
                    {/* {startLocationID} */}
                </input>
                <input
                    type="text"
                    name="end"
                    placeholder="End Location ID"
                    // onChange={handleChange}
                >
                    {/* {endLocationID} */}
                </input>
            </form>
            <button>Edit</button>
            <button>Delete</button>
            <button onClick={handleSubmit}>Start</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    createdRide: state.user.user.rideCreator
});
export default connect(mapStateToProps)(MyRide);
