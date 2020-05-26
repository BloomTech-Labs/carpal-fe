import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { UserReducer as reducer } from "./../../Redux/Reducers/UserReducer";

import { render, wait, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Logout from "./Logout";
import TopNav from "../Nav/TopNav";

afterEach(cleanup);

describe("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Router>
            <Logout />
        </Router>,
        div
    );
});

function renderWithRedux(
    ui,
    { store = createStore(reducer, applyMiddleware(thunk)) } = {}
) {
    return {
        ...render(<Provider store={store}>{<Router>{ui}</Router>}</Provider>),
        store
    };
}

describe("logout user", () => {
    test("removes token from local storage", async () => {
        localStorage.setItem("token", "test");

        const token = localStorage.getItem("token");

        expect(token).toEqual("test");

        const wrapper = renderWithRedux(<TopNav />);

        const menu = wrapper.queryByText("Menu")
        fireEvent.click(menu);
        
        const logout = wrapper.queryByText("Logout");
        
        fireEvent.click(logout);
        wrapper.debug()

        await wait(() => {
            const noToken = localStorage.getItem("token");
            expect(noToken).not.toBeNull();
        });
    });
});