import { AUTH_USER, AUTH_ERROR } from '../reducers/actions/types'

const initalState = {
    authenticated: '',
    errorMessage: ''
}

export default (state = initalState, action) => {
    const {type, payload} = action // destructuring

    switch(type){
        case AUTH_USER:
            return {...state, authenticated: payload }
        case AUTH_ERROR:
            return {...state, errorMessage: payload }
        default:
            return state
    }
}
