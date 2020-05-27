import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import { UserReducer } from "./Redux/Reducers/UserReducer";
import { locationReducer } from "./Redux/Reducers/LocationReducer";
// import logger from "redux-logger";

const rootReducer = combineReducers({
    user: UserReducer,
    locations: locationReducer
});

//Redux Dev Tools extension debugger // don't forget compose on redux import.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);
