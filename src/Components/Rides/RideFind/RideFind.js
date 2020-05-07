import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import RideMap from "../../MapBox/RideMap/RideMap";
import "./RideFind.scss";
import Axios from "axios";
import "./RideFind.scss";
import RiderCard from "../RiderCard/RiderCard";
import api from "./../../../Utils/Api";
import AutoSuggest from "./../../AutoSuggest/AutoSuggest";

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
        start_location_id:
            "654 Lakeview Avenue, San Francisco, California 94112, United States",
        end_location_id: "1100 ocean avenue san"
    });

    const [auto, setAuto] = useState({
        begin_ride_addy: "",
        end_ride_addy: ""
    });
    const [rides, setRides] = useState([]);
    //Fetch user location depending on which form the user is filling to be able to correctly set the feature state
    const fetchSuggestions = (search_term, placement) => {
        if (placement === "") return;

        //Axios call for fetching locations based on what the user is typing
        Axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${search_term}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
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

    const handleSubmit = (e) => {
        e.preventDefault();

        //axios call to BE
    };

    //Handle user typing
    const handleChange = (e) => {
        setLocation({
            ...location,
            [e.target.name]: e.target.value
        });
        console.log(auto);
        fetchSuggestions(e.target.value, e.target.name);
    };

    console.log(location);

    // useEffect(() => {
    //     if (
    //         suggestions.end_location_id.length > 1 &&
    //         suggestions.start_location_id.length > 1
    //     ) {
    //         getRides({
    //             start_location: {
    //                 long: 0,
    //                 lat: 0
    //             },
    //             end_location: {
    //                 long: 1,
    //                 lat: 1
    //             }
    //         });
    //     }
    // }, [suggestions.start_location_id, suggestions.end_location_id]);

    const getRides = (latlong) => {
        api()
            .get("/rides", latlong)
            .then((res) => {
                setRides(res.data);
            })
            .catch((err) => {
                throw Error(err.message);
            });
    };

    return (
        <div className="search-ride-container">
            <div className="search-display">
                <h1>Start a Ride</h1>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit">Find a ride</button>
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

                                {/* test ride card */}
                                {rides.length > 1 &&
                                    rides.map((ride, index) => (
                                        <RiderCard
                                            key={index}
                                            name={ride.driver_name}
                                            ride_id={ride.id}
                                        />
                                    ))}
                            </div>
                        </div>
                    )}
                <p>Want to offer this ride instead?</p>
                <button /*  save ride function  */>Save Ride</button>
            </div>
            <div className="map-search">
                <RideMap
                    start={suggestions.start_location_id}
                    end={suggestions.end_location_id}
                />
            </div>
        </div>
    );
}

export default connect(null, {})(RideFind);
