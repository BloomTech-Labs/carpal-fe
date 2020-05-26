import * as rtl from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import EditLocationForm from "./EditLocation";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

afterEach(rtl.cleanup);

let store;


const mockStore = configureStore();
let history

beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({
        locations: {
            route: {
                start: [],
                end: []
            }
        }
    });
});

describe("EditLocation Component", () => {
    test("Renders without crashing", () => {
        const div = document.createElement("div");

        ReactDOM.render(
            <Provider store={store}>
                <Router history={history}>
                    <EditLocationForm />
                </Router>
            </Provider>, div);
    });
});
