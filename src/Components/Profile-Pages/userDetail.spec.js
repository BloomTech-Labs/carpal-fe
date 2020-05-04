import React from "react";
import UserDetail from "./userDetail";
import { BrowserRouter as Router } from "react-router-dom";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

describe("userDetail renders without crashing", () => {
    test("userDetails renders to screen array that is passed to it via props", () => {
        const title = ["sing", "dance", "play"];
        const wrapper = rtl.render(
            <Router>
                <UserDetail title={title} />
            </Router>
        );

        const bubble = wrapper.getByText(/sing/i);
        console.log(wrapper);
        expect(bubble).toBeInTheDocument();
        expect(bubble).toBeVisible();
    });
});
