import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import api from "./Api";

afterEach(rtl.cleanup);

describe("axios calls appropriate Backend pending environment", () => {
    test("axios calls productionURL when in production environment", () => {
        process.env.NODE_ENV = "production";
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

    test("axios calls localhost when environment is not development or production", () => {
        process.env.NODE_ENV = "staging";
        console.log(api())
        expect(api().defaults.baseURL).toBe("https://staging-carpal.herokuapp.com/");
    });
});
