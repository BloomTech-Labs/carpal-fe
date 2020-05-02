import React, { useState, useEffect } from "react";
import SavedRideCard from "../SavedRideCard/SavedRideCard";
import { connect } from "react-redux";
import AddLocationName from "../SavedRideCard/AddLocationName";
import "./SavedRide.scss";

function SavedRides(props) {
    const [show, setShow] = useState(false);
    const [rides, setRides] = useState();

    useEffect(() => {
        setRides(props.savedRides);
    }, [props.savedRides]);

    const toggleClass = () => {
        setShow(!show);
      
    };

    
    return (
        <div>
            {show ? (
                <AddLocationName toggle={toggleClass} />
            ) : (
                <div className="saved-rides">
                    <section className="my-saved">
                        <h1>My saved rides...</h1>
                        <button onClick={toggleClass}>Add New ride</button>
                    </section>
                    {/* <SavedRideCard /> */}

                    {props.savedRides.map((rideData, index) => (
                        <SavedRideCard
                            key={index}
                            data={rideData}
                            rides={rides}
                            setRides={setRides}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

const mapStateToProps = (state) => ({
    savedRides: state.user.user.savedRides
});

export default connect(mapStateToProps)(SavedRides);
