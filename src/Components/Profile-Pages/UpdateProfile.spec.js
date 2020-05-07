import React from "react";
import UpdateProfile from "./UpdateProfile";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import configureStore from "redux-mock-store";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import * as actionMock from "../../Redux/Actions/UserAction";
import { getByPlaceholderText } from "@testing-library/react";
import {mockGeolocation} from "./../../../__mocks__/geolocationMock"



//assign geolocation the mockGeolocation obj
navigator.geolocation = mockGeolocation;

// mock actions that are used in UpdateProfile, without types you'll get warnings/errors
jest.mock("../../Redux/Actions/UserAction", () => {
    return {
        SetProfileUpdate: jest.fn((vals) => (dispatch) =>
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
    hobbies: [],
    audio_love: [],
    audio_hate: [],
    favoriteLocation: [
        {
            latitude: 32.715736,
            longitude: -117.161087
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

describe("Update Profile", () => {
    test("Renders without crashing", () => {
        const div = document.createElement("div");
         
        ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <UpdateProfile />
                </Router>
            </Provider>,
            div
        );
    });

    test("Form should not submit without values", async () => {
        const { getByTestId, getByPlaceholderText } = rtl.render(
            <Provider store={store}>
                <Router>
                    <UpdateProfile />
                </Router>
            </Provider>
        );

        rtl.fireEvent.change(getByPlaceholderText("First Name"), {
            target: { value: "" }
        });

        rtl.fireEvent.submit(getByTestId("updateProfileForm"));

        await rtl.wait(() => {
            expect(actionMock.SetProfileUpdate).not.toHaveBeenCalled();
        });
    });

    test("Submits form and calls redux actions", async () => {
        const { getByTestId } = rtl.render(
            <Provider store={store}>
                <Router>
                    <UpdateProfile />
                </Router>
            </Provider>
        );

        expect(getByTestId("updateProfileForm")).toBeVisible();
        rtl.fireEvent.change(getByTestId("updateProfileDriver"), {
            target: { value: true }
        });

        rtl.fireEvent.submit(getByTestId("updateProfileForm"));

        await rtl.wait(() => {
            expect(actionMock.SetProfileUpdate).toHaveBeenCalled();
            expect(actionMock.EditProfileAction).toHaveBeenCalled();
        });
    });
});
