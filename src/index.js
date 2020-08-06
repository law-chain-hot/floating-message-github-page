import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import reducer from './reducers'
import App from './components/App'
import Welcome from './components/Welcome'
import Signup from './components/auth/Signup'
import Feature from './components/Feature'
import Signout from './components/auth/Signout'
import Signin from './components/auth/Signin'
import Message from './components/Message'
import GetMessage from './components/GetMessage'

import { Auth0Provider } from "@auth0/auth0-react";



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
        // redirectUri="http://localhost:3000/"
        redirectUri="https://mysterious-caverns-42891.herokuapp.com/"
    >
        <Provider store={store}>
            <BrowserRouter>
                <App>
                    <Route path='/' exact component={Welcome} />
                    <Route path='/signup' exact component={Signup} />
                    <Route path='/feature' exact component={Feature} />
                    <Route path='/signout' exact component={Signout} />
                    <Route path='/signin' exact component={Signin} />
                    <Route path='/postmessage' exact component={Message} />
                    <Route path='/getmessage' exact component={GetMessage} />
                </App>
            </BrowserRouter>
        </Provider>
    </Auth0Provider>
    , document.querySelector('#root')
)
