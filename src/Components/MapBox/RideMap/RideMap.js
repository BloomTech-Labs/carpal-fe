import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, FlyToInterpolator } from "react-map-gl";
import Logo from "../../../img/Logo.png";
import "./RideMap.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import PolyLineOverlay from "../../Rides/RideFind/PolyLineOverlay";
import Axios from "axios";

const mapboxAPI = process.env.REACT_APP_MAPBOX_TOKEN;

function RideMap(props) {
    
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

    const [marker, setMarker] = useState([-122.457827, 37.718436]);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(getUserLocation);

        flyTo();

        if (props.start.length > 1 && props.end.length > 1) {
            const start = props.start.join(",");
            const end = props.end.join(",");

            getDirections(start, end);
        }
    }, [props.start, props.end, locations.length]);

    const getDirections = (start, end) => {
        Axios.get(
            `https://api.mapbox.com/directions/v5/mapbox/driving/${start};${end}?radiuses=40;100&geometries=geojson&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
        )
            .then((res) => {
                setLocations(res.data.routes[0].geometry.coordinates);
                //Set marker coordinates for the start and end location when a user selects their pickup and drop of points
                setMarker([props.start, props.end]);
            })
            .catch((err) => console.log(err));
    };

    //function for getting users coordinates using browsers geolocation API
    const getUserLocation = (position) => {
        var crd = position.coords;

        //Set the maps long and lat so that the map renders based on  the users current location.
        setViewport({
            ...viewport,
            latitude: crd.latitude,
            longitude: crd.longitude
        });
        
        //Set proximity coordinates to prioritize search location result based on users current location
        props.setProximityCords({
            longitude: crd.longitude,
            latitude: crd.latitude,
        })
        //When we Get users location we set the marker to the users current location
        setMarker([crd.longitude, crd.latitude]);
    };

    const handleDragEnd = (event) => {
        setViewport({
            ...viewport,
            longitude: event.lngLat[0],
            latitude: event.lngLat[1]
        });
        //Update Users location on dragend
        setMarker([event.lngLat[0], event.lngLat[1]]);
    };

    const flyTo = () => {
        const newViewport = {
            ...viewport,
            longitude: props.start[0],
            latitude: props.start[1],
            zoom: 15,
            transitionDuration: 5000,
            transitionInterpolator: new FlyToInterpolator()
        };

        setViewport(newViewport);
    };

    // Function to render A Marker
    const renderMarker = (longLat, index = 0) => {
        return (
            <Marker
                key={index}
                latitude={longLat[1]}
                longitude={longLat[0]}
                offsetLeft={-10}
                offsetTop={-10}
                draggable={true}
                onDragEnd={(e) => console.log(e)}
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
        );
    };
    return (
        <div role="map-wrapper" className="map">
            <ReactMapGL
                {...viewport}
                key="hello"
                mapboxApiAccessToken={mapboxAPI}
                mapStyle="mapbox://styles/carpal/ck9bvhge005yl1io1hpfp1q7z"
                onViewportChange={(viewport) => {
                    setViewport(viewport);
                }}
            >
                {Array.isArray(marker[0]) && Array.isArray(marker[1])
                    ? marker.map((cur, index) =>
                          renderMarker([cur[0], cur[1]], index)
                      )
                    : renderMarker(marker)}

                <PolyLineOverlay points={locations} />
            </ReactMapGL>
        </div>
    );
}
export default RideMap;
