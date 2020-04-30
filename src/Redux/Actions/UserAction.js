import api from "../../Utils/Api";
export const REQUEST_START = "REQUEST_START";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_ERROR = "REQUEST_ERROR";
export const SET_USER = "SET_USER";
export const SET_EDITING = "SET_EDITING";
export const SET_PROFILE_UPDATE = "SET_PROFILE_UPDATE";
export const SET_FAVORITE_LOCATION = "SET_FAVORITE_LOCATION";
export const ADD_LOCATION = "ADD_LOCATION";

export const DELETE_LOCATION = "DELETE_LOCATION";
export const EDIT_LOCATION = "EDIT_LOCATION"

export const CANCEL_RIDE_REQUEST = "CANCEL_RIDE_REQUEST";


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
            .catch((err) => {
                dispatch({ type: REQUEST_ERROR, payload: err });
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
            .catch((err) => {
                dispatch({ type: REQUEST_ERROR, payload: err });
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
            .catch((err) => dispatch({ type: REQUEST_ERROR, payload: err }));
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
            .catch((err) => {
                dispatch({ type: REQUEST_ERROR, payload: err });
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
                    type: REQUEST_ERROR
                });
            });
    };
}

export function AddSavedLocation(payload) {
    return (dispatch) => {

        dispatch({ type: ADD_LOCATION, payload })
        // add a second dispatch to post to ride table
    }
    //hit the api endpoint here to hit locations table and ride table

}
export function CancelRideRequest(id) {
    return (dispatch) => {
        dispatch({ type: REQUEST_START });
        api()
            .delete(`/request/${id}`)
            .then((res) => {
                dispatch({ type: REQUEST_SUCCESS });
            })
            .catch((error) => {
                dispatch({
                    type: REQUEST_ERROR
                });
            });
    };

}


export function DeleteLocation(id) {
    return (dispatch) => {
        dispatch(
            { type: DELETE_LOCATION, payload: id }
        )
        //instead of delete --> remove: change status pending/accepted
    }
}

export function EditLocation(id, payload) {
    return (dispatch) => {
        dispatch({
            type: EDIT_LOCATION, payload
        })
    }
}