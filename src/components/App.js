import React from 'react'
import Header from './Header'
import { BrowserRouter, Route } from 'react-router-dom'
import LoginButton from './auth/LoginButton'
import LogoutButton from './auth/LogoutButton'
import Profile from './auth/Profile'
import { connect } from 'react-redux'
import { useAuth0 } from "@auth0/auth0-react";



const App = ({ children, authenticated }) => {
    const { user, isAuthenticated } = useAuth0();

    return (
        <div>
            {(!isAuthenticated && !authenticated) && <LoginButton />}
            <Header />
            {children}
        </div>
    )
}


const mapStateToProps = (state) => {
    return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(App)
