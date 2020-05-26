import React from "react";
import SavedLocationCard from "./SavedLocationCard.js";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { render, cleanup, fireEvent, wait } from "@testing-library/react";

afterEach(cleanup);
let store;

const mockStore = configureStore([thunk])
beforeEach(() => {
    store = mockStore({
        locations: {
            favoriteLocation: [{name: "dan"}],
            route: {
            ride_id: "",
            start: [],
            end: [],
            stops: [],
            riders: []
        }
    },
    rides: []
    })
})

const location = {
    name: "Home"
}

test("Renders SavedCard without crashing", () => {
    const card = render(<Provider store={store}>
        <SavedLocationCard location={location} />
        </Provider>);

    const editButton = card.getByText("Edit");
    const deleteButton = card.getByText("Delete");
    
    expect(editButton).toBeDefined()
    expect(deleteButton).toBeDefined()

})