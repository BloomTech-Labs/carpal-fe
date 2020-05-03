import * as actions from "../Actions/UserAction";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import Api from "./../../Utils/Api";
import expect from "expect";
import axios from "axios";

const middlewares = [thunk];

const mock = new MockAdapter(Api());
const mockStore = configureStore(middlewares);
const store = mockStore({});

describe("testing user actions", () => {
    beforeEach(() => {
        store.clearActions();
    });

    test("tests editing action", () => {
        const expectedAction = {
            type: "SET_EDITING"
        };
        store.dispatch(actions.EditProfileAction());
        expect(store.getActions()).toEqual([expectedAction]);
    });

    test("tests login  action", () => {
        const expectedAction = {
            type: "REQUEST_SUCCESS"
        };
        store.dispatch(actions.SignUpAction);
        // console.log(store.dispatch(actions.SignUpAction))
    });

    test("tests editing action", () => {
        const expectedAction = [
            {
                type: "REQUEST_START"
            }
        ];
        store.dispatch(actions.SetUserAction);

    });
});
