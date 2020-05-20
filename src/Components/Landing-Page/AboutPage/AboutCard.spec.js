import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import AboutCard from "./AboutCard";

afterEach(rtl.cleanup);

let props = {
    carpaller: {
        name: "Dennis Padiernos",
        title: "Chief Dad Joke Officer",
        cutieImg: "blueCutie.png",
        profileImg: "dennis.png",
        githubURL: "https://github.com/depadiernos",
        linkedinURL: "https://www.linkedin.com/in/dennispadiernos",
        bio:
            "Dennis is a software engineer who also loves music and mechanical keyboards and in his free time, he likes long walks by the beach and being a secret agent of OWCA (Organization Without a Cool Acronym)"
    }
};

describe("about card renders without crashing", () => {
    test("<AboutCard /> snapshot", () => {
        const wrapper = rtl.render(
            <Router>
                <AboutCard {...props} />
            </Router>
        );
        expect(wrapper).toMatchSnapshot();
    });
    test("structure displays properly", () => {
        const { getByTestId } = rtl.render(
            <Router>
                <AboutCard {...props} />
            </Router>
        );
        expect(getByTestId("awesome-aliens-box")).toBeVisible();
        expect(getByTestId("left")).toBeVisible();
        expect(getByTestId("right")).toBeVisible();
        expect(getByTestId("carpaller-name")).toHaveTextContent(
            /Dennis Padiernos/
        );
    });
});
