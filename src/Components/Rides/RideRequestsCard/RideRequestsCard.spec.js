import React from "react";
import RideRequestsCard from "./RideRequestsCard";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import thunk from "redux-thunk";
import * as actionMock from "../../../Redux/Actions/UserAction";
import configureStore from "redux-mock-store";
import * as rtl from "@testing-library/react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import RideRequests from "../RideRequests/RideRequests";

const mockStore = configureStore([thunk]);

let store;

const initState = {
    requests: {
        id: 105,
        driver_id: 1,
        driver_name: "dang",
        ride_id: 1,
        status: "accepted",
        hobbies: ["video games"],
        audio_likes: ["rock"],
        audio_dislikes: ["country", "rock"]
    }
};

beforeEach(() => {
    store = mockStore({
        user: {
            user: initState
        }
    });
});

const customHistory = createBrowserHistory();
afterEach(rtl.cleanup);

test("Should Render the request Card component", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Provider store={store}>
            <Router history={customHistory}>
                <RideRequests>
                    <RideRequestsCard />
                </RideRequests>
            </Router>
        </Provider>,
        div
    );
});

//Additional testing ideas

// const patchy = Wrapper.getAllByAltText("Patchy");
// const buttons = Wrapper.getByText("Details");
// const buttons2 = Wrapper.findByDisplayValue("Accept");
// const buttons3 = Wrapper.findByDisplayValue("Decline");

// expect(patchy).toBeTruthy();
// expect(buttons).toBeDefined();
// expect(buttons2).toBeDefined();
// expect(buttons3).toBeDefined();

//Toggle isDetailsOpen to open

// await fireEvent.click(buttons);
// const hobbies = Wrapper.getByText("Hobbies");
// const audioLike = Wrapper.getByText("Audio I Like");
// const audioDislikes = Wrapper.getByText("Audio I Dislike");

// expect(hobbies.nodeName).toEqual("H3");
// expect(audioLike).toBeDefined();
// expect(audioDislikes).toBeTruthy();
