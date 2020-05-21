import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import ImagesSocials from "./ImagesSocials";

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
    test("<ImagesSocials /> snapshot", () => {
        const wrapper = rtl.render(
            <Router>
                <ImagesSocials {...props} />
            </Router>
        );
        expect(wrapper).toMatchSnapshot();
    });
    test("structure displays properly", () => {
        const { getByTestId } = rtl.render(
            <Router>
                <ImagesSocials {...props} />
            </Router>
        );
        expect(getByTestId("img-container")).toBeVisible();
        expect(getByTestId("socials")).toBeVisible();
        expect(getByTestId("github-url").getAttribute("href")).toBe(
            "https://github.com/depadiernos"
        );
    });
});
