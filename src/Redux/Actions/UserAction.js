import api from "../../Utils/Api";
export const REQUEST_START = "REQUEST_START";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_ERROR = "REQUEST_ERROR";
export const SET_USER = "SET_USER";
export const SET_EDITING = "SET_EDITING";
export const SET_PROFILE_UPDATE = "SET_PROFILE_UPDATE";
export const SET_FAVORITE_LOCATION = "SET_FAVORITE_LOCATION";
export const ADD_LOCATION = "ADD_LOCATION";
export const CANCEL_RIDE_REQUEST = "CANCEL_RIDE_REQUEST";
export const HANDLE_INCOMING_REQUESTS = "HANDLE_INCOMING_REQUESTS";
export const HANDLE_OUTGOING_REQUESTS = "HANDLE_OUTGOING_REQUESTS";

export function SignUpAction(user, props) {
    return (dispatch) => {
        dispatch({ type: REQUEST_START });
        api()
            .post("/auth/register", user)
            .then((res) => {
                dispatch({ type: REQUEST_SUCCESS });
                localStorage.setItem("token", res.data.token);
                dispatch({ type: SET_USER, payload: res.data });
                props.history.push("/profilepage");
            })
            .catch((error) => {
                dispatch({
                    type: REQUEST_ERROR,
                    payload: error
                });
            });
    };
}

export function LogInAction(user, props) {
    return (dispatch) => {
        dispatch({ type: REQUEST_START });
        api()
            .post("/auth/login", user)
            .then((res) => {
                dispatch({ type: REQUEST_SUCCESS });
                localStorage.setItem("token", res.data.token);
                dispatch({ type: SET_USER, payload: res.data });
                props.history.push("/profilepage");
            })
            .catch((error) => {
                dispatch({
                    type: REQUEST_ERROR,
                    payload: error
                });
            });
    };
}

export function SetUserAction() {
    return (dispatch) => {
        dispatch({ type: REQUEST_START });
        api()
            .get("/auth")
            .then((res) => {
                dispatch({ type: REQUEST_SUCCESS });
                dispatch({ type: SET_USER, payload: res.data });
            })
            .catch((error) => {
                dispatch({
                    type: REQUEST_ERROR,
                    payload: error
                });
            });
    };
}

export function EditProfileAction() {
    return (dispatch) => {
        dispatch({ type: SET_EDITING });
    };
}

export function SetProfileUpdate(user) {
    return (dispatch) => {
        dispatch({ type: REQUEST_START });
        api()
            .put("/users/update", user)
            .then((res) => {
                dispatch({ type: SET_USER, payload: res.data });
                dispatch({ type: REQUEST_SUCCESS });
            })
            .catch((error) => {
                dispatch({
                    type: REQUEST_ERROR,
                    payload: error
                });
            });
    };
}

export function setFavoriteLocation(payload) {
    return (dispatch) => {
        dispatch({ type: REQUEST_START });
        api()
            .post("/locations/favorites/add", payload)
            .then((response) => {
                dispatch({ type: REQUEST_START });
                dispatch({
                    type: SET_FAVORITE_LOCATION,
                    payload
                });
            })
            .catch((error) => {
                dispatch({
                    type: REQUEST_ERROR,
                    payload: error
                });
            });
    };
}

export function AddSavedLocation(payload) {
    return (dispatch) => {
        api()
            .post("/location", payload)
            .then((resp) => {
                dispatch({ type: ADD_LOCATION, payload: resp.data });
            })
            .catch((error) => {
                dispatch({
                    type: REQUEST_ERROR,
                    payload: error
                });
            });
    };
}
export function CancelRideRequest(id) {
    return (dispatch) => {
        dispatch({ type: REQUEST_START });
        api()
            .delete(`/rides/${id}/requests`)
            .then((res) => {
                dispatch({ type: REQUEST_SUCCESS });
            })
            .catch((error) => {
                dispatch({
                    type: REQUEST_ERROR,
                    payload: error
                });
            });
    };
}

export function handleIncomingRideRequest() {
    return (dispatch) => {
        dispatch({ type: REQUEST_START });

        api()
            .get(`/rides/requests/driver`)
            .then((res) => {
                console.log(res, "handleriderequest action");
                dispatch({ type: REQUEST_SUCCESS });
                dispatch({
                    type: HANDLE_INCOMING_REQUESTS,
                    payload: res
                });
            })
            .catch((error) => {
                dispatch({
                    type: REQUEST_ERROR,
                    payload: error
                });
            });
    };
}

export function handleOutgoingRideRequest() {
    return (dispatch) => {
        dispatch({ type: REQUEST_START });

        api()
            .get(`/rides/requests/rider`)
            .then((res) => {
                console.log(res, "handle outgoing riderequest action");
                dispatch({ type: REQUEST_SUCCESS });
                dispatch({
                    type: HANDLE_OUTGOING_REQUESTS,
                    payload: res
                });
            })
            .catch((error) => {
                dispatch({
                    type: REQUEST_ERROR,
                    payload: error
                });
            });
    };
}
