import React from "react";
import SavedRideCard from "./SavedLocationCard";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("should Render SavedRideCard", async () => {
    const { getByText, debug } = render(
        <SavedRideCard data={{ data: { name: "John" } }} />
    );
   
    expect(getByText("Edit").nodeName).toBe("BUTTON");
    expect(getByText("Delete").nodeName).toBeDefined();
});

