import React from "react";
import { BrowswerRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import * as rtl from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// import ReactMapGL, { Marker } from "react-map-gl";
import MapBox from "./MapBox";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

let store;
const mockstore = configureStore([thunk]);

beforeEach(() => {
    store = mockstore({
        user: {
            user: {
                first_name: "Daniel",
                last_name: "Martin",
                phone_number: 55555555,
                email: "dang@carpal.com",
                is_driver: true,
                hobbies: [],
                audio_love: [],
                audio_hate: [],
                favoriteLocation: [
                    {
                        latitude: 32.715736,
                        longitude: -117.161087
                    }
                ]
            }
        }
    });
});

describe("display mapbox", () => {
    test("Displays component", () => {
        const wrapper = rtl.render(
            <Provider store={store}>
                <MapBox />
            </Provider>
        );

        const label = wrapper.getByRole(/map-wrapper/i);
        expect(label).toBeInTheDocument();
        expect(label).toBeVisible();
    });
});
