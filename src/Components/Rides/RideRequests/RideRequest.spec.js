import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import * as actionMock from "../../../Redux/Actions/UserAction";
import RideRequests from "./RideRequests";
import { UserReducer } from "./../../../Redux/Reducers/UserReducer";

// mock actions that are used in handleriderequests
jest.mock("../../Redux/Actions/UserAction", () => {
    return {
        SetUserAction: jest.fn((vals) => (dispatch) =>
            dispatch({ type: "SET_USER", payload: vals })
        ),
        CancelRideRequest: jest.fn((vals) => (dispatch) =>
            dispatch({ type: "CANCEL_RIDE_REQUEST", payload: vals })
        ),
        handleIncomingRideRequest: jest.fn((vals) => (dispatch) =>
            dispatch({ type: "HANDLE_INCOMING_REQUESTS", payload: vals })
        ),
        handleOutgoingRideRequest: jest.fn((vals) => (dispatch) =>
            dispatch({ type: "HANDLE_OUTGOING_REQUESTS", payload: vals })
        ),
        handleUpdateRideRequest: jest.fn((vals) => (dispatch) =>
            dispatch({ type: "UPDATE_RIDE_REQUEST", payload: vals })
        )
    };
});

//mock redux

//init store?

describe("RideRequest", () => {
    test("Renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={store}>
                <Router>{ui}</Router>
            </Provider>,
            div
        );
    });
});

// expect(getByText("Requests")).toBeDefined();
// expect(getByText("Requests").nodeName).toEqual("H1");
// expect(getByText("Incoming")).toBeDefined();
// expect(getByText("Outgoing")).toBeDefined();
