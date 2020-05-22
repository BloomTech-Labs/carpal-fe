import * as rtl from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import MyRide from "./MyRide";

const geocde = jest.fn();

describe("MyRide Component", () => {
    test("Renders without crashing", () => {
        const div = document.createElement("div");

        ReactDOM.render(<MyRide />, div);
    });

    test("Renders correctly", () => {
        const { getByTestId } = rtl.render(<MyRide />);

        expect(getByTestId("myRideHeader")).toBeInTheDocument();

        expect(getByTestId("myRideContainer")).toBeInTheDocument();

        expect(getByTestId("myRideH2").innerHTML).toBe("My Rides");

        expect(getByTestId("myRideH2")).toBeInTheDocument();
    });
});
