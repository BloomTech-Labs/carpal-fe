import React from 'react';
import ReactDOM from 'react-dom';
import SearchRide from './SearchRide';
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";

afterEach(rtl.cleanup);

const mockGeolocation = {
    getCurrentPosition: jest.fn().mockImplementationOnce((vals) => vals)
};

//assign geolocation the mockGeolocation obj
navigator.geolocation = mockGeolocation;

describe("SearchRide", () => {
    test("Renders without crashing", () => {
        const div = document.createElement("div");

        ReactDOM.render(<SearchRide />, div);
    })
    test("matches snapshot", () => {
        const tree = rtl.render(
            <Router>
                <SearchRide/>
            </Router>    
        );
        expect(tree).toMatchSnapshot()
    })
})
