import { SET_FAVORITE_LOCATION } from './../Actions/UserAction'

const initState  = {
    favoriteLocation: []

}

export function locationReducer(state=initState, action){
    switch (action.type) {
        case SET_FAVORITE_LOCATION:
            return {
                ...state,
                favoriteLocation: [
                    ...state.favoriteLocation,
                    action.payload
                ]
            }
    
        default:
            return state
    }
}