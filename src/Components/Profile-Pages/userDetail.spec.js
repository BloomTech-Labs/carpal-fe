import React from "react";
import UserDetail from "./userDetail";
import { BrowserRouter as Router } from "react-router-dom";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

describe("userDetail renders without crashing", () => {
    const testObject = {
        hobbies: ["sing", "dance", "act"]
    };

    test("userDetails renders to screen array that is passed to it via props", () => {
        const wrapper = rtl.render(
            <Router>
                <UserDetail item={testObject.hobbies} />
            </Router>
        );

        const title = wrapper.queryByText(/sing/i);
        expect(title).toBeInTheDocument();
        expect(title).toBeVisible();
    });
});
