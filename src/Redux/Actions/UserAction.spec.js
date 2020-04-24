import configureMockStore from 'redux-mock-store'
import * as actions from '../Actions/UserAction'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore()


describe('testing user actions', () => {

    beforeEach(() => {
        store.clearActions();
    })

    test('tests editing action', () => {
        const expectedAction = {
            type: 'SET_EDITING'
        }
        store.dispatch(actions.EditProfileAction())
        expect(store.getActions()).toEqual([expectedAction])
    })

    test('tests login  action', () => {
        const expectedAction = {
            type: 'REQUEST_SUCCESS'
        }
        store.dispatch(actions.SignUpAction)
        console.log(store.dispatch(actions.SignUpAction))
    })

    test('tests editing action', () => {
        const expectedAction = {
            type: 'REQUEST_START'
        }
        store.dispatch(actions.LogInAction())
        expect(store.getActions()).toEqual([expectedAction])
    })

    test('tests editing action', () => {
        const expectedAction = {
            type: 'REQUEST_START'
        }
        store.dispatch(actions.SetUserAction())
        expect(store.getActions()).toEqual([expectedAction])
    })

})