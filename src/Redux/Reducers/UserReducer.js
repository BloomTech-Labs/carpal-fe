import {
    REQUEST_START,
    REQUEST_SUCCESS,
    REQUEST_ERROR,
    SET_USER,
    SET_EDITING,
    SET_PROFILE_UPDATE,
    SET_FAVORITE_LOCATION
} from "../Actions/UserAction";

const initialState = {
    isLoading: false,
    error: null,
    user: {
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        isDriver: false,
        hobbies: [],
        audio_love: [],
        audio_hate: [],
        favoriteLocation: [
            {
                latitude: 32.715736,
                longitude: -117.161087
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
        case SET_FAVORITE_LOCATION:
            return {
                ...state,
                user: {
                    ...state.user,
                    favoriteLocation: [
                        ...state.user.favoriteLocation,
                        action.payload
                    ]
                }
            };
        default:
            return state;
    }
}
