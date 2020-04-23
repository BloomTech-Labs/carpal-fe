import React from "react";
import ReactDOM from "react-dom";
import * as rtl from "@testing-library/react";
import RiderCard from "./RiderCard";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

let props = {
    name: "test",
    hobbies: ["running, biking"],
    audioLikes: ["jazz"],
    audioDislikes: ["pop"]
};
describe("RiderCard", () => {
    test("Renders without crashing", () => {
        const div = document.createElement("div");

        ReactDOM.render(<RiderCard name="test" />, div);
    });

    test("Displays Props", () => {
        const { getByTestId } = rtl.render(<RiderCard {...props} />);

        expect(getByTestId("nameField").innerHTML).toBe("test");
    });

    test("Expands details on click", () => {
        const { queryByTestId, queryAllByTestId, getByTestId } = rtl.render(
            <RiderCard {...props} />
        );

        expect(queryByTestId("riderUl")).not.toBeInTheDocument();

        rtl.fireEvent.click(getByTestId("detailsButton"));

        expect(queryAllByTestId("riderUl")).toBeTruthy();
        expect(queryAllByTestId("riderUl").length).toBe(3);
    });
});
