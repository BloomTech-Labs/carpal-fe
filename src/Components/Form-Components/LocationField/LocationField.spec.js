import React from "react";
import LocationField from "./LocationField";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import { Field, Formik } from "formik";

beforeEach(cleanup);

test("should Render Location Field Component", () => {

    const wrapper = render(
        <Formik>
            <LocationField />
        </Formik>
    );

});
