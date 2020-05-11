import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { connect } from "react-redux";
import Logo from "./../../img/Logo.png";
import "./MapBox.scss";
import "mapbox-gl/dist/mapbox-gl.css";

const mapboxAPI = process.env.REACT_APP_MAPBOX_TOKEN;

function MapBox(props) {
    const [viewport, setViewport] = useState({
        latitude: props.favoriteLocation[0].latitude,
        longitude: props.favoriteLocation[0].longitude,
        zoom: 15,
        width: "100%",
        height: "200px",
        position: "center"
    });
    //State for keeping track of the Markers long/lat
    const [marker, setMarker] = useState({
        latitude: props.favoriteLocation[0].latitude,
        longitude: props.favoriteLocation[0].longitude
    });
    useEffect(() => {
        if (
            props.favoriteLocation[0].latitude === 0 &&
            props.favoriteLocation[0].longitude === 0
        ) {
            navigator.geolocation.getCurrentPosition(getUserLocation);
        }
    }, []);

    const getUserLocation = (position) => {
        var crd = position.coords;
        setViewport({
            ...viewport,
            latitude: crd.latitude,
            longitude: crd.longitude
        });
        //When we Get users location we set the marker to the users current location
        setMarker({
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
        //Update Users location on dragend
        setMarker({
            longitude: event.lngLat[0],
            latitude: event.lngLat[1]
        });
    };
    return (
        <div role="map-wrapper" className="map">
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={mapboxAPI}
                mapStyle="mapbox://styles/carpal/ck9bvhge005yl1io1hpfp1q7z"
                onViewportChange={(viewport) => {
                    setViewport(viewport);
                }}
            >
                <Marker
                    latitude={marker.latitude}
                    longitude={marker.longitude}
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
