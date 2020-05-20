import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import api from "./Api";

afterEach(rtl.cleanup);

const mock = jest.fn(api);

describe("axios calls appropriate Backend pending environment", () => {
    test("axios calls productionURL when in production environment", () => {

        process.env.REACT_APP_IS_STAGING = 0

        expect(api().defaults.baseURL).toBe(
            "https://carpal-production.herokuapp.com/"
        );
    });

    test("axios calls staging when in development environment", () => {
        process.env.NODE_ENV = "development";
        
        expect(api().defaults.baseURL).toBe(
            "https://staging-carpal.herokuapp.com/"
        );
    });
    test("axios calls staging when in development environment", () => {
        process.env.REACT_APP_IS_STAGING = 1;
        
        expect(api().defaults.baseURL).toBe(
            "https://staging-carpal.herokuapp.com/"
        );
    });

   
});
