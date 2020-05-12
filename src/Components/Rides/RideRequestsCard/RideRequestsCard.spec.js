import React from "react";
import RideRequestsCard from "./RideRequestsCard";
import { render, fireEvent } from "@testing-library/react";
import User from "./../../../Redux/Reducers/UserReducer";

const props = {
    incoming: true,
    index: 0,
    user: { ...mockUerStore() }
};

test("Should Render the request Card component",  async () => {
    const Wrapper = render(
        <RideRequestsCard
            incoming={props.incoming}
            user={props.user}
            index={props.index}
        />
    );
    const patchy = Wrapper.getAllByAltText("Patchy");
    const buttons = Wrapper.getByText("Details");
    const buttons2 = Wrapper.findByDisplayValue("Accept");
    const buttons3 = Wrapper.findByDisplayValue("Decline");

    expect(patchy).toBeTruthy();
    expect(buttons).toBeDefined();
    expect(buttons2).toBeDefined();
    expect(buttons3).toBeDefined();
    
    //Toggle isDetailsOpen to open
    await fireEvent.click(buttons);
    const hobbies = Wrapper.getByText("Hobbies");
    const audioLike = Wrapper.getByText("Audio I Like");
    const audioDislikes = Wrapper.getByText("Audio I Dislike");

    expect(hobbies.nodeName).toEqual("H3");
    expect(audioLike).toBeDefined();
    expect(audioDislikes).toBeTruthy();
});

// function to mock the user store object
function mockUerStore() {
    return {
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        is_driver: true,
        hobbies: [],
        audioLikes: [],
        audioDislikes: [],
        favoriteLocation: [
            {
                latitude: 32.715736,
                longitude: -117.161087
            }
        ],
        savedRides: [
            {
                id: 1,
                name: "Path to Work"
            },
            {
                id: 2,
                name: "Grocery Run"
            }
        ],
        incoming_ride_requests: [
            {
                rider_name: "test ride"
            },
            {
                rider_name: "test ride 2"
            }
        ],
        outgoing_ride_requests: [
            {
                driver_name: "test driver",
                status: "pending",
                ride_id: 1
            },
            {
                driver_name: "test driver 2",
                status: "approved",
                ride_id: 2
            }
        ]
    };
}
