import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./AboutPage";

afterEach(rtl.cleanup);

describe("about page renders without crashing", () => {
    test("<AboutPage /> snapshot", () => {
        const wrapper = rtl.render(
            <Router>
                <About />
            </Router>
        );
        expect(wrapper).toMatchSnapshot();
    });
    test("header displays", () => {
        const { getByTestId } = rtl.render(
            <Router>
                <About />
            </Router>
        );
        expect(getByTestId("about-header")).toBeVisible();
        expect(getByTestId("about-header")).toHaveTextContent(
            /Meet the CarPallers/
        );
    });
    test("carpallers section displays", () => {
        const { getByTestId } = rtl.render(
            <Router>
                <About />
            </Router>
        );
        expect(getByTestId("carpallers-section")).toBeVisible();
    });
});
