import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../reducers/actions';
import { useAuth0 } from "@auth0/auth0-react";


const Signout = (props) => {
  // const callback = () => props.history.push('/signup')
  const callback = () => props.history.push('/')

  const { logout } = useAuth0();

  useEffect(() => {
    logout()
    props.signout(callback)
  }, [])

  return (
    <div>
      Sorry to see you go
    </div>
  )
}

export default connect(null, actions)(Signout);
