import SearchMap from "./SearchMap";
import * as rtl from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";


afterEach(rtl.cleanup);

const mockGeolocation = {
    getCurrentPosition: jest.fn().mockImplementationOnce((vals) => vals)
};

//assign geolocation the mockGeolocation obj
navigator.geolocation = mockGeolocation;

describe("SearchMap", () => {
    test("Renders without crashing", () => {
        const div = document.createElement("div");

        ReactDOM.render(<SearchMap />, div);
    });

    test("Matches snapshot", () => {
        const wrapper = rtl.render(<SearchMap />);

        expect(wrapper).toMatchSnapshot();
    });
});