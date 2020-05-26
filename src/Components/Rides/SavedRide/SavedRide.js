import React, { useState, useEffect, useRef } from "react";
import SavedLocationCard from "../SavedRideCard/SavedLocationCard";
import SavedRideCard from "../SavedRideCard/SavedRideCard";
import { connect } from "react-redux";
import AddLocationName from "../SavedRideCard/AddFavoriteLocation";
import {
    getFavorites,
    getSavedRides,
    deleteRide,
    editRide,
    startRide
} from "../../../Redux/Actions/LocationActions";
import "./SavedRide.scss";
import { Link } from "react-router-dom";

function SavedRides(props) {
    const [show, setShow] = useState(false);
    const [favoriteLocations, setFavoriteLocations] = useState();
    const [rideLocations, setRideLocations] = useState({
        startLocation: "",
        endLocation: ""
    });

    function usePrevious(value) {
        const ref = useRef(value);
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    const prev = usePrevious(favoriteLocations);
    //create an object deep comparison checker function.
    //if return value is false, set favelocation = current
    //else faveLocation = prevObj
    //run this in a useEffect because it is based on order (synchro rules)

    useEffect(() => {
        //sets the global state store
        props.getFavorites();
        props.getSavedRides();

        //sets the local state
        const locs = new Promise(getFavorites());
        locs.then((resp) => setFavoriteLocations(resp.payload)).catch((err) =>
            console.error(err)
        );
    }, [prev]);

    const toggleShow = () => {
        setShow(!show);
    };

    const handleUpdate = () => {
        props.getFavorites();
    };

    const handleRideStart = (ride) => {
        props.startRide(ride, props.history);
    };

    const handleRideEdit = () => {
        props.editRide();
    };

    const handleRideDelete = (id) => {
        props.deleteRide(id);
    };

    return (
        <div>
            {show ? (
                <AddLocationName toggle={toggleShow} />
            ) : (
                <div className="saved-rides">
                    <section className="my-saved">
                        <h1>My favorite locations...</h1>
                        <button onClick={toggleShow}>Add New Location</button>
                    </section>

                    {props.favorites &&
                        props.favorites.map((location, index) => (
                            <SavedLocationCard
                                key={index}
                                location={location}
                                onUpdate={() => handleUpdate()}
                                setRideLocations={setRideLocations}
                                rideLocations={rideLocations}
                            />
                        ))}
                </div>
            )}
            <div className="saved-rides">
                <section className="my-saved">
                    <h1>My saved rides...</h1>
                    <Link to="/home" className="btn">
                        Add Ride +
                    </Link>
                </section>
                {props.rides &&
                    props.rides.map((ride, index) => (
                        <SavedRideCard
                            key={index}
                            ride={ride}
                            handleRideEdit={handleRideEdit}
                            handleRideDelete={handleRideDelete}
                            handleRideStart={handleRideStart}
                        />
                    ))}
                {/* <MyRide rides={rideLocations} /> */}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    favorites: state.locations.favoriteLocation,
    rides: state.locations.rides
});

export default connect(mapStateToProps, {
    getFavorites,
    getSavedRides,
    deleteRide,
    editRide,
    startRide
})(SavedRides);
