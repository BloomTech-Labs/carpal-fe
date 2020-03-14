import React from "react";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom'
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

describe("renders without crashing", () => {
    test("displays CarPal", () => {
        const wrapper = rtl.render(<Router><App /></Router>);

        const title = wrapper.queryByRole(/app/i);
        expect(title).toBeInTheDocument();
        expect(title).toBeVisible();
    });
});
