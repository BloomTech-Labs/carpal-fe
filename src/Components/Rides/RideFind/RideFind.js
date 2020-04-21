import React from "react";
import LocationField from "../../Form-Components/LocationField/LocationField";
import { Form, withFormik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import RideMap from "../../MapBox/RideMap/RideMap";
import Axios from "axios";
// import "../../MapBox/RideMap/RideMap.scss"
const mpxClient = require("@mapbox/mapbox-sdk");
const geo = require("@mapbox/mapbox-sdk/services/geocoding");

const baseClient = mpxClient({
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN
});

const geoClient = geo(baseClient);



function RideFind(props) {

    const {
        values: { start_location_id, end_location_id }
    } = props;

    const [suggestions, setSuggestions] = React.useState([]);

    React.useEffect(()=>{
        fetchSuggestions(start_location_id)
    },[start_location_id, end_location_id ]);
    React.useEffect(()=>{
        fetchSuggestions(end_location_id)
    },[end_location_id ]);

    const fetchSuggestions = (search_term) => {
        if(start_location_id === '') return;

        Axios.get( `https://api.mapbox.com/geocoding/v5/mapbox.places/${search_term}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
        ).then(response => {
            setSuggestions(response.data)
        }).catch(error => new Error(error))
    }

    return (
        <div className="search-ride-container">
            <div className="search-display">
                <h1>Start a Ride</h1>
                <Form>
                    <LocationField
                        name="start_location_id"
                        placeholder="Start"
                    />
                    <LocationField
                        name="end_location_id"
                        placeholder="Destination"
                    />
                    <button type="submit">Find a ride</button>
                </Form>
                <p>or select one of your favorite locations</p>
                {props.favoriteLocations &&
                    props.favoriteLocations.map((cur, i) => (
                        <button>{cur.name}</button>
                    ))}
            </div>
            <div className="map-search">
                <RideMap />
            </div>
        </div>
    );
}

const LocationForm = withFormik({
    mapPropsToValues: (values) => {
        return {
            start_location_id: values.start_location_id || "",
            end_location_id: values.end_location_id || ""
        };
    },
    validationSchema: yup.object().shape({
        start_location_id: yup.string().required("Start location required"),
        end_location_id: yup.string().required("Destination required")
    }),

    async handleSubmit(values, { props }) {
        // convert address to lat/long here
        try {
            const start = await geoClient
                .forwardGeocode({
                    query: values.start_location_id,
                    countries: ["us"],
                    limit: 1
                })
                .send();
            const end = await geoClient
                .forwardGeocode({
                    query: values.end_location_id,
                    countries: ["us"],
                    limit: 1
                })
                .send();
            console.log(start, end);
        } catch (err) {
            console.log(err);
        }

        //send data to BE
    }
})(RideFind);

export default connect(null, {})(LocationForm);
