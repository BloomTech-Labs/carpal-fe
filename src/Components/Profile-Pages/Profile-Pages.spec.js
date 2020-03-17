import React, { useState, useEffect } from "react";
import { Form, withFormik, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import ProfilePage from "./Profile-Pages"
import * as rt1 from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

afterEach(rt1.cleanup);

describe("Checking header fields", () => {
    test("", () => {
        const wrapper = rt1.render()
         
    })
    
})