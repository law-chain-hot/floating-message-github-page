import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../reducers/actions';
import { useAuth0 } from "@auth0/auth0-react";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        margin: '10%',
        height: '300px',
        boxShadow: '1px 3px 19px 3px rgb(34 36 38 / 35%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px'
    },

    des: {
        padding: '20px',
        textAlign: 'center'
    },
    btn: {
        // width: '30px'
    }
});

const Signout = (props) => {
  const classes = useStyles()
  const callback = () => props.history.push('/')

  const { logout, isAuthenticated } = useAuth0();

  useEffect(() => {
    if(isAuthenticated) 
      logout()
    props.signout(callback)
  }, [])

  return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h1 >
                    You successfully sign out!
                </h1>
            </div>
            <div className={classes.des}>

                And we are sorry to see you go.
            </div>

        </div>
  )
}

export default connect(null, actions)(Signout);



