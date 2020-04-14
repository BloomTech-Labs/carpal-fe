import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//Component
import SignUp from "./SignUp";

//Redux imports
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { UserReducer as reducer } from "./../../Redux/Reducers/UserReducer";
// import * as actions from './../../Redux/Actions/UserAction'

//testing Imports
import { cleanup, render, fireEvent, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

function renderWithRedux(
    ui,
    { store = createStore(reducer, applyMiddleware(thunk)) } = {}
) {
    return {
        //render to render a react component
        ...render(
            //pass in the provider because we are trying to mock the way the component is being rendered and the components uses the connect HOC which a react-redux component.
            <Provider store={store}>
                <Router>
                    {/* what ever component that is pass as the function argument */}
                    {ui}
                </Router>
            </Provider>
        )
    };
}

describe("signup user", () => {
    const wrapper = renderWithRedux(<SignUp />);
    const first_name = wrapper.queryByPlaceholderText("First Name");
    const last_name = wrapper.queryByPlaceholderText("Last Name");
    const password = wrapper.queryByPlaceholderText("Password");
    const email = wrapper.queryByPlaceholderText("Email@email.com");

    test("Display signup component ", () => {
        expect(first_name).toBeDefined();
        expect(first_name.name).toBe("first_name");
        expect(first_name.value.length).toStrictEqual(0);
        expect(first_name.type).toEqual("text");
        expect(last_name).toBeDefined();
        expect(last_name.name).toBe("last_name");
        expect(last_name.value.length).toStrictEqual(0);
        expect(last_name.type).toEqual("text");
        expect(password).toBeDefined();
        expect(password.name).toBe("password");
        expect(password.value.length).toStrictEqual(0);
        expect(password.type).toEqual("password");
        expect(email).toBeDefined();
        expect(email.name).toBe("email");
        expect(email.value.length).toStrictEqual(0);
        expect(email.type).toEqual("email");
    });
});

describe("Test signing up", () => {
    const wrapper =
        renderWithRedux(<SignUp />) /
        // wrapper.debug()
        test("Fill in new User info and log dispatch action for registering new user", () => {
            const wrapper = renderWithRedux(<SignUp />);
            const first_name = wrapper.queryByPlaceholderText("First Name");
            const last_name = wrapper.queryByPlaceholderText("Last Name");
            const password = wrapper.queryByPlaceholderText("Password");
            const email = wrapper.queryByPlaceholderText("Email@email.com");
            const button = wrapper.queryByText("Submit");
            fireEvent.change(first_name, { target: { value: "Brandon" } });
            fireEvent.change(last_name, { target: { value: "ball" } });
            fireEvent.change(password, { target: { value: "ball@ball12343" } });
            fireEvent.change(email, {
                target: { value: "brandonB@gmail.com" }
            });

            //Testing for the form values
            expect(first_name.value).toStrictEqual("Brandon");
            expect(last_name.value.length).toBeGreaterThan(0);
            expect(password.value.length).not.toBeFalsy();
            expect(email.value).toContain("@");

            fireEvent.submit(button);
        });
});
