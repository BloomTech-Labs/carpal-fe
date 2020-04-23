import * as rtl from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import * as rtl from "@testing-library/react";
import RideFind from "./RideFind";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

const fetchSuggestions = jest.fn().mockImplementationOnce((vals, place) => [
    [-79.93833, 37.27274],
    [-79.8632827, 37.2778114]
]);
