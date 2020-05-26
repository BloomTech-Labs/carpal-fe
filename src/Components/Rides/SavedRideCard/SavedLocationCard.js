import React, { useState } from "react";
import "./SavedRideCard.scss";
import { DeleteLocation } from "../../../Redux/Actions/LocationActions";
import { connect } from "react-redux";
import EditLocationForm from "./EditLocation";

function SavedLocationCard(props) {
    const [show, setShow] = useState(false);

    const handleDelete = () => {
        props.DeleteLocation(props.location.id);
    };

    const handleEdit = () => {
        setShow(!show);
    };

    const handleShow = () => {
        setShow(!show);
    };

    return (
        <div className="saved-card">
            {show ? (
                <EditLocationForm
                    toggle={handleShow}
                    location={props.location}
                />
            ) : (
                <>
                    <h3>{props.location.name}</h3>
                    <button onClick={handleEdit}> Edit </button>
                    <button onClick={handleDelete}> Delete </button>
                </>
            )}
        </div>
    );
}

export default connect(null, {
    DeleteLocation
})(SavedLocationCard);
