import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import RideMap from "../../MapBox/RideMap/RideMap";
import "./RideFind.scss";
import Axios from "axios";
import "./RideFind.scss";
import RiderCard from "../RiderCard/RiderCard";
import api from "./../../../Utils/Api";
import AutoSuggest from "./../../AutoSuggest/AutoSuggest";
import {
    currentRoute,
    setStops,
    saveRide
} from "../../../Redux/Actions/LocationActions";
import { createRideRequest } from "../../../Redux/Actions/UserAction";

function RideFind(props) {
    //hold long and lat for both location
    const [suggestions, setSuggestions] = useState({
        start_location_id: [],
        end_location_id: []
    });

    //hold the arrays for setting features from the api call
    const [features, setFeatures] = useState([]);

    //Determine where to render the auto suggestions component left or right
    const [suggestSection, setSuggestSection] = useState({
        start: false,
        end: false
    });

    // for handling input change
    const [location, setLocation] = useState({
        start_location_id: "",
        end_location_id: ""
    });

    const [auto, setAuto] = useState({
        begin_ride_addy: "",
        end_ride_addy: ""
    });
    const [rides, setRides] = useState([]);
    const [loading, setLoading] = useState(false);

    // State to handle proximity search based on the users geolocation
    const [proximityCords, setProximityCords] = useState({
        longitude: 0,
        latitude: 0
    });

    //Fetch user location depending on which form the user is filling to be able to correctly set the feature state
    const fetchSuggestions = (search_term, placement) => {
        if (placement === "") return;

        //Axios call for fetching locations based on what the user is typing
        Axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${search_term}.json?proximity=${proximityCords.longitude},${proximityCords.latitude}&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
        )
            .then((response) => {
                setFeatures(response.data.features);

                //Detemine which side to render the renderAutoSuggest component onChange
                placement === "start_location_id"
                    ? setSuggestSection({
                          start: true,
                          end: false
                      })
                    : setSuggestSection({
                          start: false,
                          end: true
                      });
            })
            .catch((error) => new Error(error));
        //error handle
    };

    //Handle user typing
    const handleChange = (e) => {
        setLocation({
            ...location,
            [e.target.name]: e.target.value
        });

        fetchSuggestions(e.target.value, e.target.name);
    };

    useEffect(() => {
        if (
            suggestions.end_location_id.length > 1 &&
            suggestions.start_location_id.length > 1
        ) {
            getRides({
                start_location: {
                    long: suggestions.start_location_id[0],
                    lat: suggestions.start_location_id[1]
                },
                end_location: {
                    long: suggestions.end_location_id[0],
                    lat: suggestions.end_location_id[1]
                }
            });
            props.currentRoute(
                suggestions.start_location_id,
                suggestions.end_location_id
            );
        }
    }, [suggestions.start_location_id, suggestions.end_location_id, props]);

    const getRides = (latlong) => {
        setLoading(true);
        api()
            .get("/rides", { params: latlong })
            .then((res) => {
                setRides(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err.message);
                setLoading(false);
            });
    };
    rides.sort((a, b) => a.score - b.score);
    return (
        <div className="search-ride-container">
            <div className="search-display">
                <h1>Start a Ride</h1>
                <form>
                    <div className="search-ride-input">
                        <input
                            onChange={handleChange}
                            type="text"
                            name="start_location_id"
                            placeholder="Pick Up location"
                            value={location.start_location_id}
                            autoComplete="off"
                        />

                        {suggestSection.start && features.length > 1 && (
                            <AutoSuggest
                                features={features}
                                suggestSection={suggestSection}
                                setSuggestions={setSuggestions}
                                setLocation={setLocation}
                                setSuggestSection={setSuggestSection}
                                suggestions={suggestions}
                                setAuto={setAuto}
                                auto={auto}
                                location={location}
                            />
                        )}
                    </div>

                    <div className="search-ride-input">
                        <input
                            onChange={handleChange}
                            type="text"
                            name="end_location_id"
                            placeholder="Destination"
                            value={location.end_location_id}
                            autoComplete="off"
                        />
                        {suggestSection.end && features.length > 1 && (
                            <AutoSuggest
                                features={features}
                                suggestSection={suggestSection}
                                setSuggestions={setSuggestions}
                                setLocation={setLocation}
                                setSuggestSection={setSuggestSection}
                                suggestions={suggestions}
                                setAuto={setAuto}
                                auto={auto}
                                location={location}
                            />
                        )}
                    </div>
                </form>

                {props.favoriteLocations &&
                    props.favoriteLocations.map((cur, i) => (
                        <button>{cur.name}</button>
                    ))}
                {suggestions.start_location_id.length > 0 &&
                    suggestions.end_location_id.length > 0 && (
                        <div className="ridesContainer">
                            <div className="searchedRides">
                                {/* map over rides that match our query */}
                                {rides.length > 1 ? (
                                    rides.map((ride, index) => (
                                        <RiderCard
                                            key={index}
                                            name={ride.driver_name}
                                            ride_id={ride.id}
                                            ride={ride}
                                            stops={props.stops}
                                            setStops={props.setStops}
                                            history={props.history}
                                            createRideRequest={
                                                props.createRideRequest
                                            }
                                        />
                                    ))
                                ) : loading ? (
                                    <p>Searching for matching rides...</p>
                                ) : (
                                    <p>No rides found in your area.</p>
                                )}
                            </div>
                        </div>
                    )}
                {location.start_location_id && location.end_location_id && (
                    <div className="offer-ride">
                        <p>Want to offer this ride instead?</p>
                        <button
                            onClick={() => {
                                props.saveRide(suggestions, props);
                            }}
                        >
                            Save Ride
                        </button>
                    </div>
                )}
            </div>
            <div className="map-search">
                <RideMap
                    start={suggestions.start_location_id}
                    end={suggestions.end_location_id}
                    setProximityCords={setProximityCords}
                    stops={props.stops}
                />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    stops: state.locations.route.stops
});

export default connect(mapStateToProps, {
    currentRoute,
    setStops,
    saveRide,
    createRideRequest
})(RideFind);
