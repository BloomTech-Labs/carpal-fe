import { UserReducer } from "./UserReducer";

const initialState = {
    isLoading: false,
    error: null,
    user: {
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
                latitude: 0,
                longitude: 0
            }
        ],

        rides: [
            {
                id: 1,
                name: "Path to Work",
                status: "pending"
            },
            {
                id: 2,
                name: "Grocery Run",
                status: "accepted"
            },
            {
                id: 3,
                name: "Liquor store",
                status: "saved"
            }
        ],
        incoming_ride_requests: [],
        outgoing_ride_requests: []
    },
    isEditing: false
};

describe("User Reducer", () => {
    test("Request Start", () => {
        const action = { type: "REQUEST_START" };

        expect(UserReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true,
            error: null
        });
    });

    test("Request Success", () => {
        const action = { type: "REQUEST_SUCCESS" };

        expect(UserReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: false,
            error: null
        });
    });

    test("Request Error", () => {
        const action = { type: "REQUEST_ERROR", payload: "Error!" };

        expect(UserReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: false,
            error: "Error!"
        });
    });

    test("SET_USER", () => {
        const payload = {
            id: "someToken",
            first_name: "Dan",
            last_name: "Martin"
        };
        const action = { type: "SET_USER", payload };

        expect(UserReducer(initialState, action)).toEqual({
            ...initialState,
            user: { ...initialState.user, ...payload }
        });
    });

    test("Set Editing", () => {
        const action = { type: "SET_EDITING" };

        expect(UserReducer(initialState, action)).toEqual({
            ...initialState,
            isEditing: true
        });
    });

    test("Handle Incoming Requests", () => {
        const payload = [{ id: 2, rider_name: "George" }];
        const action = { type: "HANDLE_INCOMING_REQUESTS", payload };

        expect(UserReducer(initialState, action)).toEqual({
            ...initialState,
            user: {
                ...initialState.user,
                incoming_ride_requests: payload
            }
        });
    });

    test("Handle Outgoing Requests", () => {
        const payload = [{ id: 1, driver_name: "Steven" }];
        const action = { type: "HANDLE_OUTGOING_REQUESTS", payload };

        expect(UserReducer(initialState, action)).toEqual({
            ...initialState,
            user: {
                ...initialState.user,
                outgoing_ride_requests: payload
            }
        });
    });

    test("Cancel Ride Request", () => {
        const payload = { request_id: 1 };
        const action = { type: "CANCEL_RIDE_REQUEST", payload };

        expect(UserReducer(initialState, action)).toEqual({
            ...initialState,
            user: {
                ...initialState.user,
                outgoing_ride_requests: initialState.user.outgoing_ride_requests.filter(
                    (cur) => cur.id !== payload.request_id
                )
            }
        });
    });

    test("Update Ride Request", () => {
        const payload = [{ id: 1, rider_name: "Daniel" }];
        const action = { type: "UPDATE_RIDE_REQUEST", payload };

        expect(UserReducer(initialState, action)).toEqual({
            ...initialState,
            user: {
                ...initialState.user,
                incoming_ride_requests: payload
            }
        });
    });
});
