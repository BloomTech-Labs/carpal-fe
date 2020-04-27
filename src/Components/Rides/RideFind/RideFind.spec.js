import * as rtl from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "redux-mock-store";
import RideFind from "./RideFind";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Axios from "axios";

afterEach(rtl.cleanup);

const getCall = jest.spyOn(Axios, "get");

//mock navigator's getCurrentPosition function
const mockGeolocation = {
    getCurrentPosition: jest.fn().mockImplementationOnce((vals) => vals)
};

//assign geolocation the mockGeolocation obj
navigator.geolocation = mockGeolocation;

let store;

const mockStore = configureStore();

beforeEach(() => {
    store = mockStore({
        user: {
            user: {}
        }
    });
});

describe("RideFind", () => {
    test("Renders without crashing", () => {
        const div = document.createElement("div");

        ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <RideFind />
                </Router>
            </Provider>,
            div
        );
    });

    test("No cards displayed before search", () => {
        const { queryByTestId } = rtl.render(
            <Provider store={store}>
                <Router>
                    <RideFind />
                </Router>
            </Provider>
        );

        expect(queryByTestId("rideCardDiv")).toBeFalsy();
        expect(queryByTestId("rideCardDiv")).not.toBeInTheDocument();
    });

    test("Cards should display after search", () => {
        const {
            getAllByTestId,
            getByTestId,
            getByPlaceholderText,
            debug
        } = rtl.render(
            <Provider store={store}>
                <Router>
                    <RideFind />
                </Router>
            </Provider>
        );

        rtl.fireEvent.change(getByPlaceholderText("Pick Up location"), {
            target: { value: "2927 Edgefield Circle, vinton, va" }
        });

        rtl.fireEvent.change(getByPlaceholderText("Destination"), {
            target: { value: "110 salem ave, roanoke, va" }
        });

        expect(getCall).toHaveBeenCalled();

        // debug()
    });
});
