import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./AddLocationName.scss";
import { EditLocation } from "../../../Redux/Actions/LocationActions";
import geocode from "../../../Utils/geocoder";

function EditLocationForm(props) {
    const [updatedLocation, setUpdatedLocation] = useState({
        name: "",
        lat: 0,
        long: 0,
        address: ""
    });

    //sets the state for the current location
    useEffect(() => {
        setUpdatedLocation({
            ...updatedLocation,
            name: props.location.name,
            lat: props.location.lat,
            long: props.location.long,
            id: props.location.id
        });
    }, []);

    //geocodes the updated input
    useEffect(() => {
        let point = geocode(updatedLocation);
        const coords = Promise.resolve(point);
        coords.then((resp) => {
            {
                resp
                    ? setUpdatedLocation({
                          ...updatedLocation,
                          lat: resp[0],
                          long: resp[1]
                      })
                    : (resp = null);
            }
        });
    }, [updatedLocation.address]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.EditLocation(updatedLocation);
        props.toggle();
    };

    const handleChange = (e) => {
        setUpdatedLocation({
            ...updatedLocation,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="edit-form">
            <h1>Edit Location</h1>
            <form className="location-edit-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={updatedLocation.name}
                    onChange={handleChange}
                ></input>
                <input
                    type="text"
                    name="address"
                    placeholder="address"
                    value={updatedLocation.address}
                    onChange={handleChange}
                ></input>
                <button type="submit">Save and Close</button>
            </form>
        </div>
    );
}

export default connect(null, { EditLocation })(EditLocationForm);
