import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./Dashboard";
import {render } from "@testing-library/react"

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Dashboard />, div);
});

test('Render two image tags',async () => {
    const wrapper = await render(<Dashboard />);
    const image = wrapper.getAllByAltText("Under Construction");


    
    expect(image[0].className).toEqual("show-tablet center")
    expect(image[1].className).toEqual("hide-tablet center")
    expect(image.length).toBe(2);
    expect(image[0].nodeName).toEqual("IMG")
    expect(image[1].nodeName).toEqual("IMG")


})
