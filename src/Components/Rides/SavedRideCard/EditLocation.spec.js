import * as rtl from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import EditLocationForm from "./EditLocation";

const geocode = jest.fn();

const api = jest.fn(() => {
    return {
        get: jest.fn()
    };
});

describe("EditLocation Component", () => {
    test("Renders without crashing", () => {
        const div = document.createElement("div");

        ReactDOM.render(<EditLocationForm />, div);
    });
});
