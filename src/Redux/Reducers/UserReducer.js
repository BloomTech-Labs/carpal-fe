import {
    REQUEST_START,
    REQUEST_SUCCESS,
    REQUEST_ERROR,
    SET_USER,
    SET_EDITING,
    SET_PROFILE_UPDATE,
    HANDLE_INCOMING_REQUESTS,
    HANDLE_OUTGOING_REQUESTS,
    CANCEL_RIDE_REQUEST,
    UPDATE_RIDE_REQUEST,
    SET_START_LOCATION,
    SET_END_LOCATION
} from "../Actions/UserAction";

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

        rideCreator: {
            start_location_id: 0,
            end_location_id: 0
        },

        incoming_ride_requests: [],
        outgoing_ride_requests: []
    },
    isEditing: false
};

export function UserReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null
            };
        case REQUEST_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case SET_USER:
            return {
                ...state,

                user: {
                    ...state.user,
                    ...action.payload
                }
            };
        case SET_EDITING:
            return {
                ...state,
                isEditing: !state.isEditing
            };
        case SET_PROFILE_UPDATE:
            return {
                ...state,
                user: action.payload
            };

        case HANDLE_INCOMING_REQUESTS:
            return {
                ...state,
                user: {
                    ...state.user,
                    incoming_ride_requests: [
                        // ...state.user.incoming_ride_requests,
                        ...action.payload
                    ]
                }
            };

        case HANDLE_OUTGOING_REQUESTS:
            return {
                ...state,
                user: {
                    ...state.user,
                    outgoing_ride_requests: [
                        // ...state.user.outgoing_ride_requests,
                        ...action.payload
                    ]
                }
            };

        case CANCEL_RIDE_REQUEST:
            const cancelledId = action.payload.request_id;
            // console.log(action.payload.request_id, "cancel");
            return {
                ...state,
                user: {
                    ...state.user,
                    // outgoing_ride_requests: [
                    //     ...state.user.outgoing_ride_requests,
                    //     action.payload
                    // ]
                    outgoing_ride_requests: state.user.outgoing_ride_requests.filter(
                        (outgoing_rides) => outgoing_rides.id !== cancelledId
                    )
                }
            };

        case UPDATE_RIDE_REQUEST:
            return {
                ...state,
                user: {
                    ...state.user,
                    incoming_ride_requests: [...action.payload]
                }
            };
        /////// RIDE CREATOR ACTIONS
        case SET_START_LOCATION:
            return {
                ...state,
                user: {
                    ...state.user,
                    rideCreator: {
                        ...state.rideCreator,
                        start_location_id: action.payload
                    }
                }
            };

        case SET_END_LOCATION:
            return {
                ...state,
                user: {
                    ...state.user,
                    rideCreator: {
                        ...state.rideCreator,
                        end_location_id: action.payload
                    }
                }
            };

        default:
            return state;
    }
}
