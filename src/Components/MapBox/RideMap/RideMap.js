import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import Logo from "../../../img/Logo.png";
import "./RideMap.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import PolyLineOverlay from "../../Rides/RideFind/PolyLineOverlay";
import Axios from 'axios';

import { config } from "dotenv";
config();
const mapboxAPI = process.env.REACT_APP_MAPBOX_TOKEN;

function RideMap(props) {
    // console.log(props)
    const [viewport, setViewport] = useState({
        latitude: 0,
        longitude: 0,
        zoom: 15,
        width: "100%",
        height: "100vh",
        position: "center"
    });

    const [locations, setLocations] = useState([]);
    //State for keeping track of the Markers long/lat

    const [marker, setMarker] = useState({
        latitude: 37.718436,
        longitude: -122.457827
    });
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(getUserLocation);
        
        if (props.start.length > 1 && props.end.length > 1) {
            const start = props.start.join(",");
            const end = props.end.join(",");
            getDirections(start,end);
        }
    }, [props.start, props.end]);

    const getDirections = (start, end) => {
        Axios.get(
            `https://api.mapbox.com/directions/v5/mapbox/driving/${start};${end}?radiuses=40;100&geometries=geojson&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
        )
            .then((res) => {
                setLocations(res.data.routes[0].geometry.coordinates);
            })
            .catch((err) => console.log(err));
    }
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
                {/* {locations &&
                    locations.map((cur, index) => (
                        <Marker
                            key={index}
                            latitude={cur.lat || marker.latitude}
                            longitude={cur.long || marker.longitude}
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
                    ))} */}
                <PolyLineOverlay
                    points={locations}
                />
            </ReactMapGL>
        </div>
    );
}
export default RideMap;
