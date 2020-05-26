import React from "react";
import SavedRideCard from "./SavedRideCard";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { locationReducer} from "../../../Redux/Reducers/LocationReducer";

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

const ride = {
    start_location: {
        lat: 37.806426,
        long: -122.4318
    },
    end_location: {
        lat: 37.806426,
        long: -122.4318
    }
}

test("should Render SavedRideCard", async () => {
    const { getByText, debug } = renderWithRedux(
        <SavedRideCard data={{ data: { name: "John" } }} ride={ride}/>
    );
   
    expect(getByText("Start").nodeName).toBe("BUTTON");
    expect(getByText("Delete").nodeName).toBeDefined();
});

