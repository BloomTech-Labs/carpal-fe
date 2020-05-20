import api from "../../Utils/Api";
export const SET_FAVORITE_LOCATIONS = "SET_FAVORITE_LOCATIONS";
export const ADD_LOCATION = "ADD_LOCATION";
export const DELETE_LOCATION = "DELETE_LOCATION";
export const EDIT_LOCATION = "EDIT_LOCATION";
export const REQUEST_START = "REQUEST_START";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_ERROR = "REQUEST_ERROR";
export const SAVE_ROUTE = "SAVE_ROUTE";
export const SET_STOPS = "SET_STOPS";
export const SAVE_RIDE = "SAVE_RIDE";

export function getFavorites() {
    return (dispatch) => {
        // dispatch({ type: REQUEST_START });
        api()
            .get("/locations/favorites")
            .then((response) => {
                dispatch({
                    type: SET_FAVORITE_LOCATIONS,
                    payload: response.data
                });
            })
            .catch((error) => {
                dispatch({ type: REQUEST_ERROR });
            });
    };
}

export function DeleteLocation(location_id) {
    return (dispatch) => {
        dispatch({ type: DELETE_LOCATION, payload: location_id });
        console.log(location_id);
        api()
            .delete(`/locations/favorites/${location_id}`)
            .then((resp) =>
                dispatch({ type: DELETE_LOCATION, payload: location_id })
            );
    };
}

// export function setFavoriteLocation(payload) {
//     return (dispatch) => {
//         dispatch({ type: REQUEST_START });
//         api()
//             .post("/locations/favorites", payload)
//             .then((response) => {
//                 dispatch({ type: REQUEST_START });
//                 dispatch({
//                     type: SET_FAVORITE_LOCATION,
//                     payload
//                 });
//             })
//             .catch((error) => {
//                 dispatch({
//                     type: REQUEST_ERROR
//                 });
//             });
//     };
// }

export function AddFavoriteLocation(location) {
    return (dispatch) => {
        api()
            .post("locations/favorites/", location)
            .then((res) => dispatch({ type: ADD_LOCATION, payload: location }))
            .catch((err) => dispatch({ type: REQUEST_ERROR }));
        // add a second dispatch to post to ride table
    };
    //hit the api endpoint here to hit locations table and ride table
}

export function EditLocation(location) {
    return (dispatch) => {
        api()
            .put(`locations/favorites/${location.id}`, location)
            .then((res) => dispatch({ type: EDIT_LOCATION, payload: location }))
            .catch((err) => {
                dispatch({ type: REQUEST_ERROR });
            });
    };
}

// poly line routing
export function currentRoute(start, end) {
    return (dispatch) => {
        dispatch({ type: SAVE_ROUTE, payload: { start, end } });
    };
}

export function setStops(stopsArray) {
    return (dispatch) => {
        dispatch({ type: SET_STOPS, payload: stopsArray });
    };
}

// save a ride given start and end lat and long
export function saveRide({ start_location_id, end_location_id }, props) {
    return async (dispatch) => {
        try {
            dispatch({ type: REQUEST_START });
            // post start and end lat and long to /locations to obtain ids for each
            const start = await api().post("/locations", {
                lat: start_location_id[0],
                long: start_location_id[1]
            });
            const end = await api().post("/locations", {
                lat: end_location_id[0],
                long: end_location_id[1]
            });
            // send the two recieved start and end ids to the users rides to create a new saved ride
            const savedRide = await api().post("/users/rides", {
                start_location_id: start.data.id,
                end_location_id: end.data.id
            });
            dispatch({ type: SAVE_RIDE, payload: savedRide.data });
            dispatch({ type: REQUEST_SUCCESS });
            props.history.push("/saved");
        } catch (err) {
            dispatch({ type: REQUEST_ERROR, payload: err });
        }
    };
}
