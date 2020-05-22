import React, { useState } from "react";
import RideMap from "../../MapBox/RideMap/RideMap";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

function RideInProgress(props) {
    const [proximityCords, setProximityCords] = useState({
        longitude: 0,
        latitude: 0
    });

    if (props.route.start.length < 1 || props.route.end.length < 1) {
        return <Redirect to="/home" />;
    }
    return (
        <div className="search-ride-container">
            {/* give  stops prop for a marker to mark user to pick up*/}

            {/* add card for current person to pick up */}
            <div className="search-display">
    <h1>On your way to pick up <em>{props.route.riders[0].rider}</em></h1>
    <a href={`tel:${props.route.riders[0].rider_number}`}>{props.route.riders[0].rider_number} </a>
            </div>

            <div className="map-search">
                <RideMap
                    start={props.route.start}
                    end={props.route.end}
                    setProximityCords={setProximityCords}
                    stops={props.route.riders}
                />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        route: state.locations.route
    };
};

export default connect(mapStateToProps, {})(RideInProgress);
