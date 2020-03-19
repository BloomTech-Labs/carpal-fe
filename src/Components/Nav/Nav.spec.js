import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from "./Nav";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

describe("", () => {
    test("displays nav", () => {
        const wrapper = rtl.render(<Router><Nav /></Router>);

        const title = wrapper.getByRole(/nav/i);
        expect(title).toBeInTheDocument();
        expect(title).toBeVisible();
    });
});

