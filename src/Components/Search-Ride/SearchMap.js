import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import Logo from "./../../img/Logo.png";

import "./SearchRide.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import { config } from "dotenv";
config();

const mapboxAPI = process.env.REACT_APP_MAPBOX_TOKEN;

function SearchMap() {
    const [viewport, setViewport] = useState({
        latitude: 0,
        longitude: 0,
        zoom: 15,
        width: "100%",
        height: "100vh",
        position: "center"
    });
    //State for keeping track of the Markers long/lat
    const [marker, setMarker] = useState({
        latitude: 0,
        longitude: 0,
    });
    useEffect(() => {
        // without this test will fail from not being able to run this function
            navigator.geolocation.getCurrentPosition(getUserLocation);
    
    }, []);
    console.log('Corsd')
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


export default SearchMap;
