import React, { useState } from "react";
import { connect } from "react-redux";
import RideMap from "../../MapBox/RideMap/RideMap";
import "./RideFind.scss";
import Axios from "axios";
import "./RideFind.scss";


function RideFind(props) {

    const [suggestions, setSuggestions] = useState({
        start_location_id: [],
        end_location_id: []
    });
    const [features, setFeatures] = useState([]);
    const [suggestSection, setSuggestSection] = useState({
        start: false,
        end: false
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

                setFeatures(response.data.features);
                placement === "start_location_id"
                    ? setSuggestSection({
                          end: false,
                          start: true
                      })
                    : setSuggestSection({
                          start: false,
                          end: true
                      });
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
    const renderAutoSuggest = (address_suggestions, subsection) => {

        return (
            <ul>
                {address_suggestions.map((address, index) => (
                    <li
                        key={index}
                        onClick={(e) => {
                            e.preventDefault();
                            if(subsection.start === true){
                                setSuggestions({
                                    ...suggestions,
                                    start_location_id: address.center
                                });
                                
                            }else{
                                setSuggestions({
                                    ...suggestions,
                                    end_location_id: address.center
                                })
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
                            autoComplete="off"
                            value={location.start_location_id}
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
                        />
                        {suggestSection.end &&
                            features.length > 1 &&
                            renderAutoSuggest(features)}
                    </div>
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
