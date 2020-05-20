import React from "react";
import * as rtl from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import MapBox from "./MapBox";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

//mock navigator's getCurrentPosition function
const mockGeolocation = {

    getCurrentPosition: jest.fn().mockImplementationOnce((vals) => vals)
};

//assign geolocation the mockGeolocation obj
navigator.geolocation = mockGeolocation;

//mock redux store
let store;
const mockstore = configureStore([thunk]);

beforeEach(() => {
    //user obj in the mockStore.
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
// test for component displays to the client.
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
    
    //snapshot testing props being passed to the component. OH SNAP
    test("matches snapshot", () => {
        const tree = rtl.render(
            <Provider store={store}>
                <MapBox />
            </Provider>
        );
        expect(tree).toMatchSnapshot();
    });
    test("Navigator function working", () => {

        navigator.geolocation.getCurrentPosition();
    expect( navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
    });
});
