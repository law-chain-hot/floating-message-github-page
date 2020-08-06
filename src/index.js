import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import reducer from './reducers'
import App from './components/App'


import { Auth0Provider } from "@auth0/auth0-react";

import 'semantic-ui-css/semantic.min.css'



const initState = {
    auth: {
        authenticated: localStorage.getItem('token')
    }
}



const store = createStore(reducer, initState, applyMiddleware(reduxThunk))

ReactDOM.render(
    <Auth0Provider
        domain="qianhao.us.auth0.com"
        clientId="n7SUj53FMNjQq226jttnVYSbRYl8kIVb"
        // redirectUri={window.location.origin}
        redirectUri={process.env.REACT_APP_AUTH0_ENV}
    >
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </Auth0Provider>
    , document.querySelector('#root')
)
