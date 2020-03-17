import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import ProfilePage from "./Profile-Pages";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

describe("Checking header fields", () => {
    test("", () => {
        const wrapper = rtl.render(<Router><ProfilePage/></Router>);

        const name = wrapper.getByText("Hobbies");
        expect(name).toBeInTheDocument();
        expect(name).toBeVisible();
         
    })
    
})