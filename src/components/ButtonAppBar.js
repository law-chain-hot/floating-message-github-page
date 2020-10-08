import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import GitHubIcon from "@material-ui/icons/GitHub";

import { useAuth0 } from "@auth0/auth0-react";


import { Link } from "react-router-dom"
import { compose } from "redux"
import { connect } from "react-redux"

import * as actions from "../reducers/actions/index"

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
        textTransform: "none"

    },
    toolbar: {
        background: "#f7f7f7",
    },
    aboutme: {
        margin: theme.spacing(2),
    },
    icon: {
        marginRight: theme.spacing(1)
    }
}));




const ButtonAppBar = function (props) {
    const classes = useStyles();
    const { user, isAuthenticated } = useAuth0();

    const updateError = () => {
        props.clearError()
    }

    const signinLink = () => { props.history.push("/signin"); updateError() }
    const signupLink = () => { props.history.push("/signup"); updateError() }
    const signoutLink = () => { props.history.push("/signout"); updateError() }
    const featureLink = () => { props.history.push("/feature"); updateError() }
    const postmessageLink = () => { props.history.push("/postmessage"); updateError() }
    const getmessageLink = () => { props.history.push("/getmessage"); updateError() }





    const renderButtons = () => {
        if (props.authenticated || isAuthenticated) {
            return (
                <>
                    <Button className={classes.button} variant="contained" color="primary" disabled id='btn-signin'>Sign In</Button>
                    <Button className={classes.button} variant="contained" color="secondary" disabled id='btn-signup'>Sign Up</Button>
                    <Button className={classes.button} variant="contained" color="primary" onClick={signoutLink} id='btn-signout'>Sign Out</Button>
                    <Button className={classes.button} variant="contained" color="primary" onClick={featureLink} id='btn-feature' >Feature</Button>
                    <Button className={classes.button} variant="contained" color="primary" onClick={postmessageLink} id='btn-post-message'>Post Message</Button>
                    <Button className={classes.button} variant="contained" color="primary" onClick={getmessageLink} id='btn-get-message'>Get Message</Button>

                </>
            );
        }
        else {
            return (
                <>
                    <Button className={classes.button} variant="contained" color="primary" onClick={signinLink} id='btn-signin'>Sign In</Button>
                    <Button className={classes.button} variant="contained" color="secondary" onClick={signupLink} id='btn-signup'>Sign Up</Button>
                    <Button className={classes.button} variant="contained" color="primary" disabled id='btn-signout'>Sign Out</Button>
                    <Button className={classes.button} variant="contained" color="primary" disabled id='btn-feature'>Feature</Button>
                    <Button className={classes.button} variant="contained" color="primary" disabled id='btn-post-message'>Post Message</Button>
                    <Button className={classes.button} variant="contained" color="primary" disabled id='btn-get-message'>Get Message</Button>
                </>
            );
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Button className={classes.menuButton} color="inherit" id="floating-message">
                        <Link to="/">Floating message</Link>
                    </Button>
                    {renderButtons()}
                    <a href="https://github.com/law-chain-hot">
                        <Button
                            className={classes.aboutme}
                            variant="contained"
                        >
                            <GitHubIcon className={classes.icon} /> About Me
                        </Button>
                    </a>


                </Toolbar>

            </AppBar>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { authenticated: state.auth.authenticated }
}



export default connect(mapStateToProps, actions)(withRouter(ButtonAppBar))
