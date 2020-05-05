import React from "react";
import SavedRideCard from "./SavedRideCard";
import { render } from "@testing-library/react";

test("should Render SavedRideCard", async () => {
    const { getByText, debug } =  render(
        <SavedRideCard data={{ data: { name: "John" } }} />
    );
        console.log(debug())
    expect(getByText("Edit").nodeName).toBe("BUTTON");
    expect(getByText("Delete").nodeName).toBeDefined();

});
