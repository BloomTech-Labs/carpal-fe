export const REQUEST_START = "REQUEST_START";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_ERROR = "REQUEST_ERROR";
export const SET_USER = "SET_USER";

export function SignUpAction(user, history) {
    return dispatch => {
        dispatch({ type: REQUEST_START });
        console.log(user);
        // api()
        //     .post("/auth/login", user)
        //     .then(res => {
        //         dispatch({ type: REQUEST_SUCCESS });
        //         localStorage.setItem("token", res.data.token);
        //         history.push("/");
        //     })
        //     .catch(err => {
        //         dispatch({ type: REQUEST_ERROR, payload: err });
        //     });
    };
}

export function LogInAction(user) {
    return dispatch => {
        dispatch({ type: REQUEST_START });
        console.log(user);
    };
}

export function SetUserAction(user) {
    return dispatch => {
        dispatch({ type: SET_USER, payload: user });
        console.log(user);
    };
}
