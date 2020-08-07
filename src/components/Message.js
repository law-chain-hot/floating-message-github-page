import React, { useState } from 'react'
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux'
import axios from 'axios'

import requireAuth from './HOC/requireAuth'
import { Form, Message, Button, Input } from 'semantic-ui-react'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    container: {
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '900px',
        flexDirection: 'column',
        // background: '#4862c3bf'
    },
    form: {
        borderRadius: '10px',
        width: '60%',
        margin: '100px',
        padding: '50px',
        background: '#f3f3f3a8',
        boxShadow: '6px 3px 20px 2px #0000004d',
    },
});

const IP = process.env.REACT_APP_SERVER_DEV

// import { useAuth0 } from "@auth0/auth0-react";

const MessageComponent = (props) => {
    const classes = useStyles();

    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    const [status, setStatus] = useState('')



    const handleSubmit = async (event) => {
        const postData = {
            name: name,
            content: content
        }
        try {
            const response = await axios.post(`${IP}/postmessage`, postData)

            setName('')
            setContent('')
            setStatus('successful')
            event.preventDefault()

        } catch (err) {
            setStatus('error')
            event.preventDefault()

        }

    }

    const generateMessage = () => {

        if (status === 'successful') return (
            <Message
                success
                header='Successfully Posted'
                content="You successfully posted a message"
            />
        )
        else if (status === 'error') return (
            <Message
                error
                header='Action Forbidden'
                content='Name and content can not be empty.'
            />
        )
    }

    return (
        <div className={classes.container}>
            

            <div className={classes.form}>
                <h4>Post message</h4>
                <Form onSubmit={handleSubmit}>
                    <Form.Input
                        icon='user'
                        iconPosition='left'
                        label='Name'
                        placeholder='Name'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Form.TextArea
                        label='Message'
                        rows={7}
                        placeholder='Tell us more'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <Button content='Submit' secondary type='submit' />

                </Form>
                {generateMessage()}
            </div>

        </div>
    )
}





export default requireAuth(MessageComponent)