import React from "react";
import UpdateProfile from "./UpdateProfile";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import configureStore from "redux-mock-store";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import axiosMock from "axios";
import {
    SetUserAction,
    EditProfileAction,
    SetProfileUpdate
} from "../../Redux/Actions/UserAction";

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

const EditProfileActionMock = jest.fn();
const SetProfileUpdateMock = jest.fn((val) => console.log(val));

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

    test("Dispatch working", async () => {

        const props = {
            SetProfileUpdateMock,
            EditProfileActionMock
        }
        const { getByTestId } = rtl.render(
            <Provider store={store}>
                <Router>
                    <UpdateProfile
                    />
                </Router>
            </Provider>
        );

        // axiosMock.put.mockResolvedValueOnce({
        //     user: initState
        // })

        expect(getByTestId("updateProfileForm")).toBeVisible();

        rtl.fireEvent.change(getByTestId("updateProfileDriver"), {
            target: { value: true }
        });
        rtl.fireEvent.click(getByTestId("updateProfileSave"));

        await rtl.wait(() => {
            expect(SetProfileUpdateMock).toHaveBeenCalled();
            expect(EditProfileActionMock).toHaveBeenCalled();
        });
    });
});
