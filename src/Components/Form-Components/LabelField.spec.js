import * as rtl from "@testing-library/react";
import LabelField from "./LabelField";
import React from "react";
import {Formik } from 'formik';
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";


afterEach(rtl.cleanup);

let store;

const mockstore = configureStore([]);

beforeEach(() => {
    store = mockstore({
        user: {}
    });
});
describe("LabelField", () => {
    test("Renders without crashing", () => {
        const div = document.createElement("div");

        ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <Formik>
                        <LabelField
                            touched={null}
                            error={null}
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                        />
                    </Formik>
                </Router>
            </Provider>,
            div
        );
    });

    test("Renders props correctly", () => {
        const { getByPlaceholderText } = rtl.render(
            <Provider store={store}>
                <Router>
                    <Formik>
                        <LabelField
                            touched={null}
                            error={null}
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                        />
                    </Formik>
                </Router>
            </Provider>
        );
        expect(getByPlaceholderText("First Name")).toBeVisible();
        expect(getByPlaceholderText("First Name")).toHaveClass("formik-fields");
        expect(getByPlaceholderText("First Name")).toHaveAttribute("type", "text");
        expect(getByPlaceholderText("First Name")).toHaveAttribute("name", "first_name");
    });
});
