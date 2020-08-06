import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { useAuth0 } from "@auth0/auth0-react";


import { Link } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../reducers/actions/index'

import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing(1),
        textTransform: 'none'

    },
    toolbar: {
        background: '#f7f7f7',
    }
}));




const ButtonAppBar = function (props) {
    const classes = useStyles();
    const { user, isAuthenticated } = useAuth0();

    const updateError = () => {
        props.clearError()
    }

    const signinLink = () => { props.history.push('/signin'); updateError() }
    const signupLink = () => { props.history.push('/signup'); updateError() }
    const signoutLink = () => { props.history.push('/signout'); updateError()}
    const featureLink = () => { props.history.push('/feature'); updateError()}
    const postmessageLink = () => { props.history.push('/postmessage'); updateError()}
    const getmessageLink = () => { props.history.push('/getmessage'); updateError()}





    const renderButtons = () => {
        if (props.authenticated || isAuthenticated) {
            return (
                <>
                    <Button className={classes.button} variant="contained" color="primary" disabled>Sign In</Button>
                    <Button className={classes.button} variant="contained" color="secondary" disabled>Sign Up</Button>
                    <Button className={classes.button} variant="contained" color="primary" onClick={signoutLink}>Sign Out</Button>
                    <Button className={classes.button} variant="contained" color="primary" onClick={featureLink}>Feature</Button>
                    <Button className={classes.button} variant="contained" color="primary" onClick={postmessageLink}>Post Message</Button>
                    <Button className={classes.button} variant="contained" color="primary" onClick={getmessageLink}>Get Message</Button>
                </>
            );
        }
        else {
            return (
                <>
                    <Button className={classes.button} variant="contained" color="primary" onClick={signinLink}>Sign In</Button>
                    <Button className={classes.button} variant="contained" color="secondary" onClick={signupLink}>Sign Up</Button>
                    <Button className={classes.button} variant="contained" color="primary" disabled>Sign Out</Button>
                    <Button className={classes.button} variant="contained" color="primary" disabled>Feature</Button>
                    <Button className={classes.button} variant="contained" color="primary" disabled>Post Message</Button>
                    <Button className={classes.button} variant="contained" color="primary" disabled>Get Message</Button>
                </>
            );
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Link to="/">Redux Auth</Link>
                    </IconButton>
                    {renderButtons()}
                </Toolbar>
            </AppBar>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { authenticated: state.auth.authenticated }
}



export default connect(mapStateToProps, actions)(withRouter(ButtonAppBar))
