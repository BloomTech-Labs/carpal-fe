import React, { useState } from "react";
import RideMap from "../../MapBox/RideMap/RideMap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function RideInProgress(props) {
    const [proximityCords, setProximityCords] = useState({
        longitude: 0,
        latitude: 0
    });

    if (props.route.start.length < 1 || props.route.end.length < 1) {
        return <Redirect to="/home" />;
    }
    return (
        <div>
            {/* give  stops prop for a marker to mark user to pick up*/}
            <RideMap
                start={props.route.start}
                end={props.route.end}
                setProximityCords={setProximityCords}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        route: state.locations.route
    };
};

export default connect(mapStateToProps, {})(RideInProgress);
