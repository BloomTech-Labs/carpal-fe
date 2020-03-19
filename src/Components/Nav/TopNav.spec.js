import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import TopNav from "./TopNav";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
 
afterEach(rtl.cleanup);

describe("", () => {
    test("displays carpal", () => {
        const wrapper = rtl.render(<Router><TopNav /></Router>);

        const title = wrapper.queryByText(/carpal/i);
        expect(title).toBeInTheDocument();
        expect(title).toBeVisible();
    });
});
