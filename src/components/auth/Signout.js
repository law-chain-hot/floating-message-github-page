import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../reducers/actions';


const Signout = (props) => {
  const callback = () => props.history.push('/signup')
  useEffect(() => {
    props.signout(callback)
  }, [])

  return (
    <div>
      Sorry to see you go
    </div>
  )
}

export default connect(null, actions)(Signout);
