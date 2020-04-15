import React from "react";
import ProtectedRoute from "./ProtectedRoute";
import ProfilePage from "../Components/Profile-Pages/Profile-Pages";
import { Router } from "react-router-dom";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";

afterEach(rtl.cleanup);

describe("renders properly", () => {
    test("redirects users to login page if no token exists", () => {
        const history = createMemoryHistory();
        rtl.render(
            <Router history={history}>
                <ProtectedRoute
                    signedInUser={null}
                    history={history}
                    component={ProfilePage}
                />
            </Router>
        );

        expect(history.location.pathname).toBe("/login");
    });
});
