import React from 'react'
// import Header from './Header'
import { BrowserRouter, Route } from 'react-router-dom'
import LoginButton from './auth/LoginButton'
import LogoutButton from './auth/LogoutButton'
import Profile from './auth/Profile'
import { connect } from 'react-redux'
import { useAuth0 } from "@auth0/auth0-react";

import Welcome from './Welcome'
import Signup from './auth/Signup'
import Feature from './Feature'
import Signout from './auth/Signout'
import Signin from './auth/Signin'
import Message from './Message'
import GetMessage from './GetMessage'
import ButtonAppBar from './ButtonAppBar'




const App = ({ children, authenticated }) => {
    const { user, isAuthenticated } = useAuth0();

    return (
        <div>
            <ButtonAppBar />
            <Route path='/' exact component={Welcome} />
            <Route path='/signup' exact component={Signup} />
            <Route path='/feature' exact component={Feature} />
            <Route path='/signout' exact component={Signout} />
            <Route path='/signin' exact component={Signin} />
            <Route path='/postmessage' exact component={Message} />
            <Route path='/getmessage' exact component={GetMessage} />
        </div>
    )
}


const mapStateToProps = (state) => {
    return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(App)
