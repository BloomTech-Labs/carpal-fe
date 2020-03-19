import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SignUp from "./SignUp";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

describe("signup user", () => {
    test("displays signup", () => {
        const wrapper = rtl.render(
            <Router>
                <SignUp />
            </Router>
        );

        const title = wrapper.getByRole(/signup/i);
        expect(title).toBeInTheDocument();
        expect(title).toBeVisible();
    });
});
