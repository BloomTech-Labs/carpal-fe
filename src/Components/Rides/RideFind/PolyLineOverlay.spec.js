import PolyLineOverlay from "./PolyLineOverlay";
import * as rtl from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import ReactMapGl from "react-map-gl";

const mapboxAPI = process.env.REACT_APP_MAPBOX_TOKEN;

afterEach(rtl.cleanup);

const points = [
    [-79.869064, 37.283108],
    [-79.86998, 37.284515],
    [-79.871056, 37.28405],
    [-79.869965, 37.282104],
    [-79.869202, 37.281715],
    [-79.868027, 37.282169],
    [-79.867592, 37.283688],
    [-79.866333, 37.283344],
    [-79.863243, 37.283531],
    [-79.860191, 37.281113],
    [-79.869919, 37.278538],
    [-79.879257, 37.277473],
    [-79.881546, 37.277596],
    [-79.886467, 37.278519],
    [-79.897308, 37.280922],
    [-79.898979, 37.281792],
    [-79.900513, 37.284348],
    [-79.901978, 37.28614],
    [-79.905762, 37.287601],
    [-79.90818, 37.28912],
    [-79.909714, 37.290504],
    [-79.911903, 37.28912],
    [-79.91436, 37.286991],
    [-79.918999, 37.284344],
    [-79.927544, 37.282642],
    [-79.933327, 37.282421],
    [-79.934158, 37.281414],
    [-79.934448, 37.27874],
    [-79.93644, 37.276348],
    [-79.937599, 37.272411],
    [-79.942787, 37.272518]
];

const viewport = {
    latitude: 37.283108,
    longitude: -79.869064,
    zoom: 15,
    width: "100%",
    height: "100vh",
    position: "center"
};

describe("PolyLineOverlay", () => {
    test("Renders without crashing", () => {
        const div = document.createElement("div");

        ReactDOM.render(
            <ReactMapGl {...viewport} mapboxApiAccessToken={mapboxAPI}>
                <PolyLineOverlay points={points} />
            </ReactMapGl>,
            div
        );
    });
});
