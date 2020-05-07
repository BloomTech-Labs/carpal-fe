import React from "react";
import UserDetail from "./userDetail";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

describe("userDetail renders without crashing", () => {
    const testObject = {
        hobbies: [{ name: "sing" }, { name: "dance" }, { name: "act" }]
    };

    test("userDetails renders to screen array that is passed to it via props", () => {

        const wrapper = rtl.render(<UserDetail item={testObject.hobbies} />);
        const title = wrapper.getByText("sing");

        expect(title).toBeInTheDocument();
        expect(title).toBeTruthy();
    });
});
