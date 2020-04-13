import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import TopNav from "./TopNav";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Router>
            <TopNav />
        </Router>,
        div
    );
});
