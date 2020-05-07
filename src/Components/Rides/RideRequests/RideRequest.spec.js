import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { render } from "@testing-library/react";
import RideRequests from "./RideRequests";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { UserReducer } from "./../../../Redux/Reducers/UserReducer";

const rootReducer = combineReducers({
    user: UserReducer
});

function renderWithRedux(
    ui,
    { store = createStore(rootReducer, applyMiddleware(thunk, logger)) } = {}
) {
    return {
        ...render(
            <Provider store={store}>
                <Router>{ui}</Router>
            </Provider>
        ),
        store
    };
}

test("Render Reques Component ", () => {
    const { getByText, debug } = renderWithRedux(<RideRequests />);


    expect(getByText("Requests")).toBeDefined();
    expect(getByText("Requests").nodeName).toEqual("H3");
    expect(getByText("Incoming")).toBeDefined();
    expect(getByText("Outgoing")).toBeDefined();

});
