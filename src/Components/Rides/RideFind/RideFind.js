import React, { useState } from "react";
import { connect } from "react-redux";
import RideMap from "../../MapBox/RideMap/RideMap";
import "./RideFind.scss";
import Axios from "axios";
import "./RideFind.scss";
// const mpxClient = require("@mapbox/mapbox-sdk");
// const geo = require("@mapbox/mapbox-sdk/services/geocoding");

// const baseClient = mpxClient({
//     accessToken: process.env.REACT_APP_MAPBOX_TOKEN
// });

// const geoClient = geo(baseClient);

function RideFind(props) {
    const [suggestions, setSuggestions] = useState({
        start_location_id: [],
        end_location_id: []
    });

    const [location, setLocation] = useState({
        start_location_id: "",
        end_location_id: ""
    });

    const fetchSuggestions = (search_term, placement) => {
        if (placement === "") return;

        Axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${search_term}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
        )
            .then((response) => {
                setSuggestions({
                    ...suggestions,
                    [placement]: response.data.features[0].center
                });
                console.log(response.data.features[0].center);
            })
            .catch((error) => new Error(error));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(suggestions);

        //axios call to BE
    };

    const handleChange = (e) => {
        setLocation({
            [e.target.name]: e.target.value
        });
        fetchSuggestions(e.target.value, e.target.name);
    };

    return (
        <div className="search-ride-container">
            <div className="search-display">
                <h1>Start a Ride</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={handleChange}
                        type="text"
                        className="search-ride-input"
                        name="start_location_id"
                        placeholder="Pick Up location"
                        value={location.start_location_id}
                    />
                    <input
                        onChange={handleChange}
                        type="text"
                        name="end_location_id"
                        className="search-ride-input"
                        placeholder="Destination"
                        value={location.end_location_id}
                    />
                    <button type="submit">Find a ride</button>
                </form>
                <p>or select one of your favorite locations</p>
                {props.favoriteLocations &&
                    props.favoriteLocations.map((cur, i) => (
                        <button>{cur.name}</button>
                    ))}
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

// const LocationForm = withFormik({
//     mapPropsToValues: (values) => {
//         return {
//             start_location_id: values.start_location_id || "",
//             end_location_id: values.end_location_id || ""
//         };
//     },
//     validationSchema: yup.object().shape({
//         start_location_id: yup.string().required("Start location required"),
//         end_location_id: yup.string().required("Destination required")
//     }),

//     async handleSubmit(values, { props }) {
//         // convert address to lat/long here
//         // try {
//         //     const start = await geoClient
//         //         .forwardGeocode({
//         //             query: values.start_location_id,
//         //             countries: ["us"],
//         //             limit: 1
//         //         })
//         //         .send();
//         //     const end = await geoClient
//         //         .forwardGeocode({
//         //             query: values.end_location_id,
//         //             countries: ["us"],
//         //             limit: 1
//         //         })
//         //         .send();
//         //     console.log(start, end);
//         // } catch (err) {
//         //     console.log(err);
//         // }
//         //send data to BE
//     }
// })(RideFind);

export default connect(null, {})(RideFind);
