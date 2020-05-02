import React from "react";
import SavedRide from "./SavedRide";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { UserReducer as reducer } from "./../../../Redux/Reducers/UserReducer";

function renderWithRedux(
    ui,
    {
        store = createStore(
            combineReducers({
                user: reducer
            })
        )
    } = {}
) {
    return {
        ...render(<Provider store={store}>{<Router>{ui}</Router>}</Provider>),
        store
    };
}

test("should Render Save Ride Component", () => {
    const Wrapper = renderWithRedux(<SavedRide />);
});
