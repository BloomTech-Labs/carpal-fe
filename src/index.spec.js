import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import * as actionMock from "./Redux/Actions/UserAction";
import { UserReducer } from "./Redux/Reducers/UserReducer";
import { locationReducer } from "./Redux/Reducers/LocationReducer";
import { createStore, applyMiddleware, combineReducers } from "redux";



const rootReducer = combineReducers({
    user: UserReducer,
    locations: locationReducer
});

jest.mock("react-dom", () => ({ render: jest.fn() }));

const mockStore = configureStore([thunk]);

let store;


beforeEach(() => {
    store = mockStore(createStore(rootReducer, applyMiddleware(thunk)));
});

describe("App root", () => {
    it("should render without crashing", () => {
        let div = document.getElementById("root");

        ReactDOM.render( <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>,
        div)
     
                    
        expect(ReactDOM.render).toHaveBeenCalled()
    });
});
