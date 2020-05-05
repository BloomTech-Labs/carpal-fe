import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// Component.test.js

import thunk from "redux-thunk";
import { UserReducer as reducer } from "./../../Redux/Reducers/UserReducer";
import * as actions from "./../../Redux/Actions/UserAction";
import Login from "./Login";

import { render, cleanup, fireEvent, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import logger from "redux-logger";

afterEach(cleanup);

function renderWithRedux(
    ui,
    { store = createStore(reducer, applyMiddleware(thunk, logger)) } = {}
) {
    return {
        ...render(<Provider store={store}>{<Router>{ui}</Router>}</Provider>),
        store
    };
}

jest.mock("../../Redux/Actions/UserAction", () => {
    return {
        LogInAction: jest.fn((vals, props) => (dispatch) => {
            dispatch({ type: "REQUEST_START" });
        })
    };
});

describe("login user", () => {
    test("Renders Login component/Testing basic JSx Elements", () => {
        const wrapper = renderWithRedux(<Login />);

        expect(wrapper.queryByPlaceholderText(/Password/i).nodeName).toEqual(
            "INPUT"
        );
        expect(
            wrapper.queryByPlaceholderText(/Email@email.com/i).nodeName
        ).toEqual("INPUT");
        expect(wrapper.getByText("Login With Google")).not.toBeNull();
        expect(wrapper.getAllByText(/Login/i)[0].textContent).toBeTruthy();
        expect(
            wrapper.queryByText("New to the website?").childNodes[1].nodeName
        ).not.toBeUndefined();
        expect(
            wrapper.queryByText("New to the website?").childNodes[1].textContent
        ).toEqual("Sign Up!");
        expect(2).toBe(2);
    });

    test("should LogIn a user", async () => {
        const wrapper = renderWithRedux(<Login />);

        let Password = wrapper.queryByPlaceholderText(/Password/i);
        let Email = wrapper.queryByPlaceholderText(/Email@email.com/i);
        const submit = wrapper.queryByText("Submit");

        fireEvent.change(Password, { target: { value: "lesley" } });
        fireEvent.change(Email, { target: { value: "lesley@gmail.com" } });
        fireEvent.submit(submit);

        await wait(() => {
            expect(actions.LogInAction).toHaveBeenCalled();
            // expect(actions.LogInAction).toHaveBeenCalledWith({
            //     email: "lesley@gmail.com",
            //     password: "lesley"
            // });
            expect(actions.LogInAction).toHaveBeenCalledTimes(1);
        });
    });
});
