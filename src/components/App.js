import React, { Suspense } from 'react'
// import Header from './Header'
import { BrowserRouter, Route } from 'react-router-dom'
import LoginButton from './auth/LoginButton'
import LogoutButton from './auth/LogoutButton'
import Profile from './auth/Profile'
import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

// import Welcome from './Welcome'
// import Signup from './auth/Signup'
// import Feature from './Feature'
// import Signout from './auth/Signout'
// import Signin from './auth/Signin'
// import Message from './Message'
// import GetMessage from './GetMessage'
import ButtonAppBar from './ButtonAppBar'

const Welcome = React.lazy(() => import('./Welcome'))
const Signup = React.lazy(() => import('./auth/Signup'))
const Feature = React.lazy(() => import('./Feature'))
const Signout = React.lazy(() => import('./auth/Signout'))
const Signin = React.lazy(() => import('./auth/Signin'))
const Message = React.lazy(() => import('./Message'))
const GetMessage = React.lazy(() => import('./GetMessage'))
// const ButtonAppBar = React.lazy(() => import('./ButtonAppBar'))



const App = ({ children, authenticated }) => {
  const { user, isAuthenticated } = useAuth0()
  document.body.style.background = '#bfbfbf12'

  return (
    <>
      <ButtonAppBar />
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Suspense fallback={<div></div>}>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/feature" exact component={Feature} />
        <Route path="/signout" exact component={Signout} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/postmessage" exact component={Message} />
        <Route path="/getmessage" exact component={GetMessage} />
      </Suspense>
    </>
  )
}

const mapStateToProps = (state) => {
  return { authenticated: state.auth.authenticated }
}

// export default connect(mapStateToProps)(App)
export default App
