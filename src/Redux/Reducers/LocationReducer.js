import {
    REQUEST_START,
    REQUEST_ERROR,
    ADD_LOCATION,
    EDIT_LOCATION,
    DELETE_LOCATION,
    SET_FAVORITE_LOCATIONS,
    SAVE_ROUTE,
    SET_STOPS
} from "./../Actions/LocationActions";

const initState = {
    favoriteLocation: [],
    route: {
        start: [],
        end: [], 
        stops: []
    }
};

export function locationReducer(state = initState, action) {
    switch (action.type) {
        case REQUEST_START:
            return {
                ...state
            };

        case REQUEST_ERROR:
            return {
                ...state
            };

        case SET_FAVORITE_LOCATIONS:
            return {
                ...state,
                favoriteLocation: [...action.payload]
            };

        case ADD_LOCATION:
            return {
                ...state,
                favoriteLocation: [...state.favoriteLocation, action.payload]
            };
        case EDIT_LOCATION:
            return {
                ...state,
                favoriteLocation: [
                    ...state.favoriteLocation.map((place) => {
                        if (place.id === action.payload.id) {
                            place = action.payload;
                        }
                    })
                ]
            };

        case DELETE_LOCATION:
            return {
                ...state,
                favoriteLocation: [
                    ...state.favoriteLocation.filter(
                        (place) => place.name !== action.payload
                    )
                ]
            };

        case SAVE_ROUTE:
            return {
                ...state,
                route: {
                    ...state.route,
                    start: action.payload.start,
                    end: action.payload.end
                }
            };

            case SET_STOPS:
                return {
                    ...state,
                    route: {
                        ...state.route,
                        stops: action.payload
                    }
                }

        default:
            return state;
    }
}
