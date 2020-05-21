import React from "react";
import ReactDOM from "react-dom";
import SearchInput from "./SearchInput";
import * as rtl from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

describe("SearchInput", () => {
    test("Renders snapshot", () => {
        const tree = rtl.render(
            <Router>
                <SearchInput />
            </Router>
        );
        expect(tree).toMatchSnapshot();
    });
    test("input field show display", () => {
        const { getByTestId, getByText } = rtl.render(
            <Router>
                <SearchInput />
            </Router>
        );
        expect(getByTestId("input-field")).toBeVisible();
    });
});
