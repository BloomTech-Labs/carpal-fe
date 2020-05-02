import React from "react";
import SavedRide from "./SavedRide";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
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

test("should Render Save Ride Component", async () => {
    const Wrapper = renderWithRedux(<SavedRide />);
    const newRideBtn = Wrapper.getByText("Add New ride");

    expect(newRideBtn).toBeDefined();
    expect(Wrapper.getByText("My saved rides...").nodeName).toEqual("H1");

    //Click button to render a AddLocation component
    await fireEvent.click(newRideBtn);

    expect(Wrapper.getByPlaceholderText("location name").nodeName).toBe("INPUT");
    expect(Wrapper.getByText("Save and Close").nodeName).toBeDefined();
});
