import React, { useEffect } from 'react'
import requireAuth from './HOC/requireAuth'

import Button from '@material-ui/core/Button';
import MkGuide from 'mk-guide'
import 'mk-guide/style.css'

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


const generateGuide = () => {
    // New a maskclass with default value
    const mask = new MkGuide({
        // buttonColor: "gold", // optional   
        skipButtonColor: "firebrick", // optional
        mouseHover: "true", // optional  default:false
        mode: "dark", // default: light
        isKeyboard: true,
        isFocus: false,
    })

    mask.guides = [
        {
            element: "#btn-post-message",                // querySelector
            header: 'Post Message',
            description: "Just post a message into the message flow",   // the words of tip
        },
        {
            element: "#btn-get-message",
            header: 'Get Message',
            description: "Get a message of a stranger randomly from the message flow, and you can click the Like button",
        },
        {
            element: "#btn-signout",
            header: 'Sign Out',
            description: "Sign out, we will clear the token from this site"
        },
    ]

    return mask
}

const Feature = () => {
    const classes = useStyles()

    const handleClick = () => {
        generateGuide().start()
    }

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h1 >
                    You successfully sign in!
                </h1>
            </div>
            <div className={classes.des}>

                Now you have the access to all features
                <p />
                <p />

                Click the <b>FEATURE</b> button below to see more feature
            </div>

            <Button className={classes.btn} variant="contained" color="primary" onClick={handleClick}>FEATURE</Button> 
            <p />
            <div>(Using MK-Guide)</div>
        </div>
    )
}



export default requireAuth(Feature)
