import React, { useState } from "react";
import { connect } from "react-redux";
import RideMap from "../../MapBox/RideMap/RideMap";
import "./RideFind.scss";
import Axios from "axios";
import "./RideFind.scss";
import RiderCard from "../RiderCard/RiderCard";

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
        fetchSuggestions(e.target.value, e.target.name);
    };

    //Auto suggest component
    const renderAutoSuggest = (address_suggestions, subsection) => {
        return (
            <ul>
                {address_suggestions.map((address, index) => (
                    <li
                        data-testid={`address${index}`}
                        key={index}
                        onClick={(e) => {
                            e.preventDefault();
                            //If this true we render the component to the left(start_location_id) input field else we render it to the right input field
                            if (subsection.start) {
                                //Set the suggestion state to be sent down as props
                                setSuggestions({
                                    ...suggestions,
                                    //Restructure the array so it matches the marker state in Ridemap
                                    start_location_id: [
                                        address.center[0],
                                        address.center[1]
                                    ]
                                });
                                //set the input value to what ever the user clicked
                                setLocation({
                                    ...location,
                                    start_location_id: address.place_name
                                });
                                // Set all fields to false so we don't render autosuggest component
                                setSuggestSection({
                                    start: false,
                                    end: false
                                });
                            } else {
                                //Same steps as on the if block
                                setSuggestions({
                                    ...suggestions,
                                    end_location_id: [
                                        address.center[0],
                                        address.center[1]
                                    ]
                                });
                                setSuggestSection({
                                    start: false,
                                    end: false
                                });
                                setLocation({
                                    ...location,
                                    end_location_id: address.place_name
                                });
                            }
                        }}
                    >
                        {" "}
                        {address.place_name}
                    </li>
                ))}
            </ul>
        );
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

                        {suggestSection.start &&
                            features.length > 1 &&
                            renderAutoSuggest(features, suggestSection)}
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
                        {suggestSection.end &&
                            features.length > 1 &&
                            renderAutoSuggest(features, suggestSection)}
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
                                <RiderCard name="Test Ride" />
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
