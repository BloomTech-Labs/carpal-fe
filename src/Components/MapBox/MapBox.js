import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { connect } from "react-redux";
import Logo from "./../../img/Logo.png";
import { config } from "dotenv";
config();

const mapboxAPI = process.env.REACT_APP_MAPBOX_TOKEN;

function MapBox(props) {
    console.log(mapboxAPI);
    const [viewport, setViewport] = useState({
        latitude: props.favoriteLocation[0].latitude,
        longitude: props.favoriteLocation[0].longitude,
        zoom: 10,
        width: "80%",
        height: "200px",
        position: "center",
        container: "mapContainer"
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(getUserLocation);
    }, []);

    const getUserLocation = (position) => {
        console.log(position);
        var crd = position.coords;
        setViewport({
            ...viewport,
            latitude: crd.latitude,
            longitude: crd.longitude
        });
    };

    const handleDragEnd = (event) => {
        setViewport({
            ...viewport,
            longitude: event.lngLat[0],
            latitude: event.lngLat[1]
        });
    };
    return (
        <div className="map">
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={mapboxAPI}
                onViewportChange={(viewport) => {
                    setViewport(viewport);
                }}
            >
                <Marker
                    latitude={viewport.latitude}
                    longitude={viewport.longitude}
                    offsetLeft={-10}
                    offsetTop={-10}
                    draggable={true}
                    onDragEnd={handleDragEnd}
                >
                    <img
                        src={`${Logo}`}
                        alt="marker"
                        style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%"
                        }}
                    />
                </Marker>
            </ReactMapGL>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        favoriteLocation: state.user.user.favoriteLocation
    };
};

export default connect(mapStateToProps, {})(MapBox);
