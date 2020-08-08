import React, { useEffect } from 'react'

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
        isFocus: false
    })

    mask.guides = [
        {
            element: "#floating-message",                // querySelector
            header: 'Welcome',
            description: "This is Floating Message, you can control it with 'Tab' and 'Enter'",   // the words of tip
        },
        {
            element: "#btn-signin",
            header: 'Sign In',
            description: "You can sign in with Google account",
        },
        {
            element: "#btn-signup",
            header: 'Sign Up',
            description: "Or you can sign up with your own account"
        },
    ]

    return mask
}

const Welcome = () => {
    const classes = useStyles()

    const handleClick = () => {
        generateGuide().start()
    }

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h1 >
                    Welcome to Floating Message!
                </h1>
            </div>
            <div className={classes.des}>
                Hi there! This website is for you guys to post messages. And you can also get messages
                from strangers randomly after signing up.
                <p />
                <p />

                Want more? Click the <b>INTRO</b> button below.
            </div>

            <Button className={classes.btn} variant="contained" color="primary" onClick={handleClick}>INTRO</Button>

        </div>
    )
}

export default Welcome
