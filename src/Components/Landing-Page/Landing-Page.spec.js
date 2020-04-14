import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Page from "./Landing-Page";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

describe("what should be on the screen at all time", () => {
    test("render snapshot", () => {
        const tree = rtl.render(
            <Router>
                <Page />
            </Router>
        );
        expect(tree).toMatchSnapshot();
    });
    test("This should display always", () => {
        const { getByTestId, getByText } = rtl.render(
            <Router>
                <Page />
            </Router>
        );
        expect(getByTestId("welcomeh1")).toBeVisible();
        expect(getByTestId("welcomeh1")).toHaveTextContent(
            /^Welcome to CarPal$/
        );
        expect(getByText("Welcome to CarPal")).toHaveClass("introTitle");
    });

    test("each box title", () => {
        const { getByTestId } = rtl.render(
            <Router>
                <Page />
            </Router>
        );
        expect(getByTestId("h2tag1")).toBeVisible();
        expect(getByTestId("h2tag1")).toHaveTextContent("Features");
        expect(getByTestId("h2tag2")).toBeVisible();
        expect(getByTestId("h2tag2")).toHaveTextContent("Drivers");
        expect(getByTestId("h2tag3")).toBeVisible();
        expect(getByTestId("h2tag3")).toHaveTextContent("Rider");
    });
    test("check if there are images on the page", () => {
        const { findByRole } = rtl.render(
            <Router>
                <Page />
            </Router>
        );
        expect(findByRole('image'));
    });
});
