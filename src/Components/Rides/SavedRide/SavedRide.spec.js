import React from "react";
import SavedRide from "./SavedRide";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { locationReducer} from "../../../Redux/Reducers/LocationReducer";
import { act } from "react-dom/test-utils";

beforeEach(cleanup);
// mock actions that are used
jest.mock("../../../Redux/Actions/LocationActions", () => {
    return {
        getFavorites: jest.fn((vals) => (dispatch) =>
            dispatch({ type: "SET_FAVORITE_LOCATIONS", payload: vals })

        ),
        getSavedRides: jest.fn((vals) => (dispatch) =>
            dispatch({ type: "GET_RIDES", payload: vals })

        ),
        deleteRide: jest.fn((vals) => (dispatch) =>
            dispatch({ type: "DEL_RIDE", payload: vals })

        ),
        editRide: jest.fn((vals) => (dispatch) =>
            dispatch({ type: "EDIT_RIDE", payload: vals })

        ),
        startRide: jest.fn((vals) => (dispatch) =>
            dispatch({ type: "START_RIDE", payload: vals })

        )
    };
});

function renderWithRedux(
    ui,
    {
        store = createStore(
            combineReducers({
                locations: locationReducer
            }),
            applyMiddleware(thunk, logger)
        )
    } = {}
) {
    return {
        ...render(<Provider store={store}>{<Router>{ui}</Router>}</Provider>),
        store
    };
}

test("should Render Save Ride Component", async () => {
    const Wrapper = renderWithRedux(<SavedRide />);
    const newRideBtn = Wrapper.getByText("Add Ride");
    const newLocBtn = Wrapper.getByText("Add New Location");

    expect(newRideBtn).toBeDefined();
    expect(Wrapper.getByText("My saved rides...").nodeName).toEqual("H1");

    //Click button to render a AddLocation component
    act(() => {
        fireEvent.click(newLocBtn);
    })
    

    expect(Wrapper.getByPlaceholderText("location name").nodeName).toBe("INPUT");
    expect(Wrapper.getByText("Save and Close").nodeName).toBeDefined();
});
