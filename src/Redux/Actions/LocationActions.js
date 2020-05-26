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
export const DEL_RIDE = "DEL_RIDE";
export const EDIT_RIDE = "EDIT_RIDE";
export const START_RIDE = "START_RIDE";
export const GET_RIDES = "GET_RIDES";
export const RIDER_START = "RIDER_START";

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
        api()
            .delete(`/locations/favorites/${location_id}`)
            .then((resp) =>
                dispatch({ type: DELETE_LOCATION, payload: location_id })
            );
    };
}

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

export function getRiderStart(id) {
    return async (dispatch) => {
        dispatch({ type: REQUEST_START });

        try {
            const res = await api().get(`/rides/riderStart/${id}`);

            dispatch({ type: REQUEST_SUCCESS });
            dispatch({ type: RIDER_START, payload: res.data });
        } catch (err) {
            dispatch({ type: REQUEST_ERROR, payload: err });
        }
    };
}

export function getSavedRides() {
    return async (dispatch) => {
        dispatch({ type: REQUEST_START });

        try {
            const res = await api().get("/users/rides");

            dispatch({ type: REQUEST_SUCCESS });

            dispatch({ type: GET_RIDES, payload: res.data });
        } catch (err) {
            dispatch({ type: REQUEST_ERROR, payload: err });
        }
    };
}

export function deleteRide(id) {
    return async (dispatch) => {
        dispatch({ type: REQUEST_START });
        try {
            const res = await api().delete(`/users/rides/${id}`);
            res && dispatch({ type: DEL_RIDE, payload: id });
            dispatch({ type: REQUEST_SUCCESS });
        } catch (err) {
            dispatch({ type: REQUEST_ERROR, payload: err });
        }
    };
}

export function editRide(newRide) {
    return async (dispatch) => {
        dispatch({ type: REQUEST_START });
        try {
            const res = await api().put("/users/rides", newRide);
            res && dispatch({ type: EDIT_RIDE, payload: newRide });
            dispatch({ type: REQUEST_SUCCESS });
        } catch (err) {
            dispatch({ type: REQUEST_ERROR, payload: err });
        }
    };
}

export function startRide(ride, history) {
    return (dispatch) => {
        dispatch({ type: REQUEST_START });
        console.log("ride", ride);
        api()
            .put(`/users/rides`, {
                ride_id: ride.id,
                driver_id: ride.driver_id,
                start_location_id: ride.start_location_id,
                end_location_id: ride.end_location_id,
                status: "started"
            })
            .then((res) => {
                // console.log("users/rides res", res)
                dispatch({ type: REQUEST_SUCCESS });
            })
            .catch((error) => {
                dispatch({
                    type: REQUEST_ERROR,
                    payload: error
                });
            });

        api()
            .get(`/users/rides/riderstart/${ride.id}`)
            .then((res) => {
                console.log("riderStops", res.data.riderStops);
                dispatch({ type: START_RIDE, payload: res.data.riderStops });
                dispatch({
                    type: SAVE_ROUTE,
                    payload: {
                        start: [
                            res.data.driverRoute[0].start_long,
                            res.data.driverRoute[0].start_lat
                        ],
                        end: [
                            res.data.driverRoute[0].end_long,
                            res.data.driverRoute[0].end_lat
                        ]
                    }
                });
                dispatch({ type: REQUEST_SUCCESS });
                history.push("/start");
            })
            .catch((error) => {
                dispatch({
                    type: REQUEST_ERROR,
                    payload: error
                });
            });
    };
}
