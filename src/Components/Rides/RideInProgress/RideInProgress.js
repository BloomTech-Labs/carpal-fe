import React, { useState } from "react";
import RideMap from "../../MapBox/RideMap/RideMap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function RideInProgress(props) {
    // const [proximityCords, setProximityCords] = useState({
    //     longitude: 0,
    //     latitude: 0
    // });

    if (props.route.start.length < 1 || props.route.end.length < 1) {
        return <Redirect to="/home" />;
    }
    return (
        <div className="search-ride-container">
            {/* give  stops prop for a marker to mark user to pick up*/}

            {/* add card for current person to pick up */}
            <div className="search-display">
                {props.route.riders[0] ? (
                    <>
                        <h1>
                            On your way to pick up &nbsp;
                            <strong>{props.route.riders[0].rider}</strong>
                        </h1>
                        <a href={`tel:${props.route.riders[0].rider_number}`}>
                            {props.route.riders[0].rider_number}
                        </a>
                    </>
                ) : (
                    <>
                        <h1>
                            No rider has requested this ride. Enjoy your empty
                            car!
                        </h1>
                    </>
                )}
            </div>

            <div className="map-search">
                <RideMap
                    start={props.route.start}
                    end={props.route.end}
                    // setProximityCords={setProximityCords}
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
