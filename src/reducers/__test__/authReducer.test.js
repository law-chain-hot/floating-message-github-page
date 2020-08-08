import authReducer from '../auth'
import { AUTH_USER, AUTH_ERROR } from '../actions/types'

it('handles actions of type AUTH_USER', () => {
    const action = {
        type: AUTH_USER,
        payload: 'mock token'
    }

    const newState = authReducer({}, action)
    expect(newState).toEqual({authenticated: 'mock token'})
})

it('handles actions of type AUTH_ERROR', () => {
    const action = {
        type: AUTH_ERROR,
        payload: 'mock error'
    }

    const newState = authReducer({}, action)
    expect(newState).toEqual({errorMessage: 'mock error'})
})


// it('handles action with unknown type', () => {
//     const newState = commentsReducer({comments: []}, {type: 'sdfsdf'})
//     expect(newState).toEqual({comments:[]})
// })