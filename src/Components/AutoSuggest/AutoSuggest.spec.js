import React from "React";
import AutoSuggest from "./AutoSuggest";
import { cleanup, render } from "@testing-library/react";

beforeEach(cleanup);

//axiosMock = jest.fn()

test("Should render the Auto Sugest Component", () => {
    const props = {
        features: [
            {
                id: "address.1441746373576996",
                place_name:
                    "100 Mission Street, San Francisco, California 94105, United States",
                center: [-122.394593, 37.792536]
            },
            {
                id: "address.1441746373576996",
                place_name:
                    "100 Mission Street, San Francisco, California 94105, United States",
                center: [-122.394593, 37.792536]
            },
            {
                id: "address.1441746373576996",
                place_name:
                    "100 Mission Street, San Francisco, California 94105, United States",
                center: [-122.394593, 37.792536]
            }
        ],
        suggestSection: { start: false, end: true },
        setSuggestions: jest.fn(),
        setLocation: jest.fn(),
        setSuggestSection: jest.fn(),
        suggestions: {
            start_location_id: [-122.457827, 37.718436],
            end_location_id: [-122.457827, 37.718436]
        },
        location: {
            start_location_id: "",
            end_location_id: ""
        },
        auto: {
            begin_ride_addy: "",
            end_ride_addy: ""
        },
        setAuto: jest.fn()
    };

    const wrapper = render(<AutoSuggest {...props} />);

    console.log(wrapper.debug());
});
