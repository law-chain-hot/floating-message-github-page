import React, { useState } from 'react'
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


import { Button, Divider, Form, Grid, Segment, Checkbox, Message } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';

import { useAuth0 } from "@auth0/auth0-react";
import * as actions from '../../reducers/actions'

import './Segment.css'

import Loader from '../Loader'

const useStyles = makeStyles({
    login: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        margin: '10px',
        color: 'white',
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    segment: {
        width: '70%',
        boxShadow: '1px 3px 19px 3px rgb(34 36 38 / 35%) important!'
    },
    btn: {
        marin: '0 10px '
    },
    header:{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px'
    }
});


const Signin = (props) => {
    const classes = useStyles();
    const { loginWithRedirect } = useAuth0();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loader, setLoader] = useState(false)

    const updateError = () => {
        props.clearError()
    }

    const handleSubmit = async (event) => {
        updateError()
        const callback = () => props.history.push('/feature')
        const postData = {
            email: email,
            password: password
        }
        setLoader(true)
        await props.signin(postData, callback)
        setLoader(false)

        event.preventDefault()
    }

    const generateMessage = () => {

        if (props.authenticated) return (
            <Message
                success
                header='Form Completed'
                content="You're all signed up for the website"
            />
        )
        else if (props.errorMessage) return (
            <Message
                error
                header='Action Forbidden'
                content='Your email or password is wrong.'
            />
        )
    }

    const generateLoader = (loader) => {
        if (loader) return <Loader/>
        else return 
    }

    return (
        <div>
            <div className={classes.header}>
                <h2>Sign in</h2>
            </div>
            <div className={classes.login}>
                <Segment placeholder className={classes.segment} id='test'>
                    <Grid columns={2} relaxed='very' stackable>
                        <Grid.Column>
                            <Form onSubmit={handleSubmit}>
                                <Form.Input
                                    icon='user'
                                    iconPosition='left'
                                    label='Email'
                                    placeholder='Email'
                                    type='text'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Form.Input
                                    icon='lock'
                                    iconPosition='left'
                                    label='Password'
                                    placeholder='Password'
                                    type='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <Button content='Login' primary type='submit' />
                            </Form>
                            {generateLoader(loader)}
                            {generateMessage()}
                        </Grid.Column>

                        <Grid.Column verticalAlign='middle'>
                            <Link to="/signup" >
                                <Button content='Sign up' icon='signup' size='big' />
                            </Link>
                            <p> </p>
                            <Button
                                content='Google account'
                                icon='google'
                                size='big'
                                onClick={loginWithRedirect}
                                color='google plus'
                            />
                        </Grid.Column>
                    </Grid>
                    <Divider vertical>Or</Divider>
                </Segment>
            </div>
        </div>
    )
}

const mapStateToProps = function (state) {
    return { 
        authenticated: state.auth.authenticated,
        errorMessage: state.auth.errorMessage 
    }
}

export default compose(connect(mapStateToProps, actions),)(Signin)

