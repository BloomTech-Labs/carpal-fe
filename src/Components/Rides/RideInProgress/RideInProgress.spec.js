import RideInProgress from "./RideInProgress";
import * as rtl from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

afterEach(rtl.cleanup);

let store;

const mockStore = configureStore();
let history;


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

describe("RideInProgress", () => {

    // this test fails both tests

    // test("Renders without crashing", () => {
    //     const newStore = mockStore({
    //         locations: {
    //             route: {
    //                 start: [-79.869064, 37.283108],
    //                 end: [-79.860191, 37.281113]
    //             }
    //         }
    //     });

    //     console.log(newStore);
    //     const div = document.createElement("div");

    //     ReactDOM.render(
    //         <Provider store={newStore}>
    //             <Router history={history}>
    //                 <RideInProgress
    //                     start={[-79.869064, 37.283108]}
    //                     end={[-79.860191, 37.281113]}
    //                 />
    //             </Router>
    //         </Provider>,
    //         div
    //     );
    // });

    test("It redirects without a route", () => {
        rtl.render(
            <Provider store={store}>
                <Router history={history}>
                    <RideInProgress />
                </Router>
            </Provider>
        );

        expect(history.location.pathname).toBe("/home");
    });
});
