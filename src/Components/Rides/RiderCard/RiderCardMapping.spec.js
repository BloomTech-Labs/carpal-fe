import React from "react";
import ReactDOM from "react-dom";
import * as rtl from "@testing-library/react";
import RiderCardMapping from "./RiderCardMapping";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

describe("RiderCardMapping", () => {
    test("Renders without crashing", () => {
        const div = document.createElement("div");

        ReactDOM.render(<RiderCardMapping name="test" />, div);
    });

    test("Renders props correctly", () => {
        const { queryByTestId, queryAllByTestId, debug } = rtl.render(
            <RiderCardMapping name={"test"} items={["running", "biking"]} />
        );

        const ul = queryByTestId("riderUl");
        const li = queryAllByTestId("riderLi");

        expect(ul).toBeInTheDocument();

        expect(li.length).toBe(2);

        expect(li[0].innerHTML).toBe("running");
    });
});
