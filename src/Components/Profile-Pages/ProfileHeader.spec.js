import React from "react";
import ProfileHeader from "./ProfileHeader";
import { BrowserRouter as Router } from "react-router-dom";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureStore([thunk]);

let store;
const initState = {
    first_name: "Daniel",
    last_name: "Martin",
    phone_number: 55555555,
    email: "dang@carpal.com"
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

describe("ProfileHeader renders without crashing", () => {
    test("ProfileHeader renders to screen array that is passed to it via props", () => {
        const wrapper = rtl.render(
            <Provider store={store}>
                <Router>
                    <ProfileHeader />
                </Router>
            </Provider>
        );

        const email = wrapper.queryByText("dang@carpal.com");
        expect(email).toBeInTheDocument();
        expect(email).toBeVisible();
    });
});
