import {
    REQUEST_START,
    REQUEST_SUCCESS,
    REQUEST_ERROR
} from "../Actions/UserAction";

const initialState = {
    isLoading: false,
    error: null
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
        default:
            return state;
    }
}
