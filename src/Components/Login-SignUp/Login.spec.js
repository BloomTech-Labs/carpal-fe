import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

describe("login user", () => {
    test("displays login", () => {
        const wrapper = rtl.render(
            <Router>
                <Login />
            </Router>
        );

        const title = wrapper.getByRole(/login/i);
        expect(title).toBeInTheDocument();
        expect(title).toBeVisible();
    });
});
