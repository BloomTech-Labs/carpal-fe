import {
    REQUEST_START,
    REQUEST_SUCCESS,
    REQUEST_ERROR,
    SET_USER,
    SET_EDITING
} from "../Actions/UserAction";

const initialState = {
    isLoading: false,
    error: null,
    user: {
        first_name: "Steveen ",
        last_name: "Van",
        phone_number: "(555) 555-5555",
        email: "steve@steve.com",
        isDriver: false,
        hobbies: ["sports", "music", "dancing"],
        audio_love: ["electronic"],
        audio_hate: ["news"]
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
                user: action.payload
            };
        case SET_EDITING:
            return {
                ...state,
                isEditing: !state.isEditing
            };
        default:
            return state;
    }
}
