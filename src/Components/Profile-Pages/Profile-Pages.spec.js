import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ProfilePage from "./Profile-Pages";
import { Provider } from "react-redux";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import * as actionMock from "../../Redux/Actions/UserAction";

const mockGeolocation = {
    getCurrentPosition: jest.fn().mockImplementationOnce((vals) => vals)
};

//assign geolocation the mockGeolocation obj
navigator.geolocation = mockGeolocation;

// mock actions that are used in UpdateProfile, without types you'll get warnings/errors
jest.mock("../../Redux/Actions/UserAction", () => {
    return {
        SetUserAction: jest.fn((vals) => (dispatch) =>
            dispatch({ type: "SET_USER", payload: vals })
        ),
        EditProfileAction: jest.fn(() => (dispatch) =>
            dispatch({ type: "SET_EDITING" })
        )
    };
});

//create a mock redux store with thunk middleware applied
const mockStore = configureStore([thunk]);

let store;

const initState = {
    first_name: "Daniel",
    last_name: "Martin",
    phone_number: 55555555,
    email: "dang@carpal.com",
    is_driver: true,

    favoriteLocation: [
        {
            latitude: 32,
            longitude: 117
        }
    ]
};

//init store for each test
beforeEach(() => {
    store = mockStore({
        user: {
            user: initState
        }
    });
});

afterEach(rtl.cleanup);

describe("Checking header fields", () => {
    test("If Profile is set to editing, editing form is displayed", () => {
        const wrapper = rtl.render(
            <Provider store={store}>
                <Router>
                    <ProfilePage />
                </Router>
            </Provider>
        );

        const name = wrapper.queryByText(/Daniel/i);
        const button = wrapper.queryByText(/Edit Profile/i);
        
        expect(name).toBeInTheDocument();
        expect(name).toBeVisible();
        
    });
});
