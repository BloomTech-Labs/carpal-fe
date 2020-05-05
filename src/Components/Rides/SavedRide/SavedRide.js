import React, { useState, useEffect } from "react";
import SavedRideCard from "../SavedRideCard/SavedRideCard";
import { connect } from "react-redux";
import AddLocationName from "../SavedRideCard/AddLocationName";
import "./SavedRide.scss";

function SavedRides(props) {
    const [show, setShow] = useState(false);
    const [rides, setRides] = useState();

    useEffect(() => {
        //make api call to set state for rides ?
        setRides(props.rides)
    }, [props.rides])

    const toggleShow = () => {
        setShow(!show)
        console.log(show)
    }

    console.log(props)
    
    return (
        <div>

            {show ? (<AddLocationName toggle={toggleShow} />) : (< div className='saved-rides' >
                <section className='my-saved'>
                    <h1>My saved rides...</h1>
                    <button onClick={toggleShow}>Add New ride</button>
                </section>

                {props.rides
                    .filter(ride => ride.status === 'saved')
                    .map((rideData, index) => <SavedRideCard key={index} data={rideData} rides={rides} setRides={setRides} />)}

            </div >)}
        </div>
    );
}

const mapStateToProps = (state) => ({
    rides: state.user.user.rides
});

export default connect(mapStateToProps)(SavedRides);
