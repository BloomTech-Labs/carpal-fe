import {
    REQUEST_START,
    REQUEST_SUCCESS,
    REQUEST_ERROR,
    SET_USER,
    SET_EDITING,
    SET_PROFILE_UPDATE,

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
                latitude: 32.715736,
                longitude: -117.161087
            }
        ],


        rides: [{
            id: 1,
            name: 'Path to Work',
            status: 'pending'
        },
        {
            id: 2,
            name: 'Grocery Run',
            status: 'accepted'
        },
        {
            id: 3,
            name: 'Liquor store',
            status: 'saved',
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

        default:
            return state;
    }
}
