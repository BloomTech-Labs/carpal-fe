import api from "../../Utils/Api";
export const SET_FAVORITE_LOCATIONS = "SET_FAVORITE_LOCATIONS";
export const ADD_LOCATION = "ADD_LOCATION";
export const DELETE_LOCATION = "DELETE_LOCATION";
export const EDIT_LOCATION = "EDIT_LOCATION";
export const REQUEST_START = "REQUEST_START";
export const REQUEST_ERROR = "REQUEST_ERROR";
export const SAVE_ROUTE = "SAVE_ROUTE";

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

export function currentRoute(start, end) {
    return (dispatch) => {
        dispatch({ type: SAVE_ROUTE, payload: { start, end } });
    };
}
