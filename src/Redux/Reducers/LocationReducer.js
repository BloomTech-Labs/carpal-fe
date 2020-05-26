import {
    REQUEST_START,
    REQUEST_ERROR,
    ADD_LOCATION,
    EDIT_LOCATION,
    DELETE_LOCATION,
    SET_FAVORITE_LOCATIONS,
    SAVE_ROUTE,
    SET_STOPS,
    SAVE_RIDE,
    DEL_RIDE,
    EDIT_RIDE,
    GET_RIDES,
    RIDER_START,
    START_RIDE
} from "./../Actions/LocationActions";

const initState = {
    favoriteLocation: [],
    route: {
        ride_id: "",
        start: [],
        end: [],
        stops: [],
        riders: []
    },
    rides: []
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
                            return action.payload;
                        } else {
                            return place;
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
            };

        case SAVE_RIDE:
            return {
                ...state,
                rides: [...state.rides, action.payload]
            };

        case DEL_RIDE:
            return {
                ...state,
                rides: state.rides.filter((ride) => {
                    return ride.id != action.payload;
                })
            };

        case EDIT_RIDE:
            return {
                ...state,
                rides: [
                    ...state.rides.map((ride) => {
                        if (ride.id === action.payload.ride_id) {
                            return action.payload;
                        } else {
                            return ride;
                        }
                    })
                ]
            };

        case RIDER_START:
            return {
                ...state,
                route: {
                    ...state.route,
                    riders: action.payload
                }
            };

        case GET_RIDES:
            return {
                ...state,
                rides: action.payload
            };

        case START_RIDE:
            return {
                ...state,
                route: {
                    ...state.route,
                    riders: action.payload
                }
            };

        default:
            return state;
    }
}
