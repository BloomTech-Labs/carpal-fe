import React from "react";
import App from "./App";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

describe("renders without crashing", () => {
    test("displays CarPal", () => {
        const wrapper = rtl.render(<App />);

        const title = wrapper.queryByText(/carpal/i);
        expect(title).toBeInTheDocument();
        expect(title).toBeVisible();
    });
});
