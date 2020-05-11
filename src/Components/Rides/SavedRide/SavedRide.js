import React, { useState, useEffect } from "react";
import SavedRideCard from "../SavedRideCard/SavedRideCard";
import { connect } from "react-redux";
import AddLocationName from "../SavedRideCard/AddFavoriteLocation";
import { getFavorites } from "../../../Redux/Actions/LocationActions";
import "./SavedRide.scss";

function SavedRides(props) {
    const [show, setShow] = useState(false);
    // const [favoriteLocations, setFavoriteLocations] = useState()
    useEffect(() => {
        props.getFavorites();
    }, []);

    const toggleShow = () => {
        setShow(!show);
        console.log(show);
    };

    console.log(props);

    return (
        <div>
            {show ? (
                <AddLocationName toggle={toggleShow} />
            ) : (
                <div className="saved-rides">
                    <section className="my-saved">
                        <h1>My saved rides...</h1>
                        <button onClick={toggleShow}>Add New ride</button>
                    </section>

                    {props.favoriteLocation.map((rideData, index) => (
                        <SavedRideCard key={index} data={rideData} />
                    ))}
                </div>
            )}
        </div>
    );
}

const mapStateToProps = (state) => ({
    favoriteLocation: state.locations.favoriteLocation
});

export default connect(mapStateToProps, { getFavorites })(SavedRides);
