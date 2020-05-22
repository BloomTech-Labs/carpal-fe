import api from "../../Utils/Api";
export const REQUEST_START = "REQUEST_START";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_ERROR = "REQUEST_ERROR";
export const SET_USER = "SET_USER";
export const SET_EDITING = "SET_EDITING";
export const SET_PROFILE_UPDATE = "SET_PROFILE_UPDATE";

export const CANCEL_RIDE_REQUEST = "CANCEL_RIDE_REQUEST";
export const HANDLE_INCOMING_REQUESTS = "HANDLE_INCOMING_REQUESTS";
export const HANDLE_OUTGOING_REQUESTS = "HANDLE_OUTGOING_REQUESTS";
export const UPDATE_RIDE_REQUEST = "UPDATE_RIDE_REQUEST";
///CREATE RIDE
export const SET_START_LOCATION = "SET_START_LOCATION";
export const SET_END_LOCATION = "SET_END_LOCATION";
export const CREATE_RIDE = "CREATE_RIDE";

export function SignUpAction(user, props) {
    return (dispatch) => {
        dispatch({ type: REQUEST_START });
        api()
            .post("/auth/register", user)
            .then((res) => {
                dispatch({ type: REQUEST_SUCCESS });
                localStorage.setItem("token", res.data.token);
                dispatch({ type: SET_USER, payload: res.data });
                props.history.push("/home");
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
                props.history.push("/home");
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

export function CancelRideRequest(payload) {
    return (dispatch) => {
        dispatch({ type: REQUEST_START });
        console.log(payload);
        api()
            .delete(`/rides/requests/${payload.request_id}`)
            .then((res) => {
                dispatch({ type: CANCEL_RIDE_REQUEST, payload });
                dispatch({ type: REQUEST_SUCCESS });
                // dispatch({ type: SET_USER });
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
                dispatch({ type: REQUEST_SUCCESS });
                dispatch({
                    type: HANDLE_INCOMING_REQUESTS,
                    payload: res.data
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
                dispatch({ type: REQUEST_SUCCESS });
                dispatch({
                    type: HANDLE_OUTGOING_REQUESTS,
                    payload: res.data
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

export function handleUpdateRideRequest(payload) {
    return (dispatch) => {
        dispatch({ type: REQUEST_START });
        console.log(payload);
        api()
            .put("/rides/requests", payload)
            .then((res) => {
                dispatch({ type: REQUEST_SUCCESS });
                api()
                    .get("/rides/requests/driver")
                    .then((res) => {
                        dispatch({
                            type: UPDATE_RIDE_REQUEST,
                            payload: res.data
                        });
                    })
                    .catch((error) => {
                        dispatch({
                            type: REQUEST_ERROR,
                            payload: error
                        });
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

export function setStartLocation(payload) {
    return (dispatch) => {
        dispatch({ type: SET_START_LOCATION, payload: payload.id });
    };
}

export function setEndLocation(payload) {
    return (dispatch) => {
        dispatch({ type: SET_END_LOCATION, payload: payload.id });
    };
}

export function createRide(payload) {
    return (dispatch) => {
        dispatch({ type: CREATE_RIDE, payload });
        api()
            .post("/users/rides", payload)
            .catch((error) => {
                dispatch({
                    type: REQUEST_ERROR,
                    payload: error
                });
            });
    };
}