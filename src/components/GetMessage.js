import React, { useState } from 'react'
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux'
import axios from 'axios'
import { IP } from '../reducers/actions/serverIP'

import requireAuth from './HOC/requireAuth'

import Button from '@material-ui/core/Button';


// import { useAuth0 } from "@auth0/auth0-react";

const GetMessage = (props) => {
    // const { handleSubmit } = props
    // const { user, isAuthenticated } = useAuth0();
    const [database, setDatabase] = useState([])


    const onClick = async (event) => {
        const response = await axios.get(`${IP}/getmessage`)
        console.log("onClick -> response", response.data)

        setDatabase(response.data)
    }

    const generateMessage = (database) => {
        if (database.length === 0) return
        const message = database[Math.floor(Math.random() * database.length)]

        return (
            <div style={{ background: 'gold' }}>
                <div>Name: {message.name}</div>
                <div>Content: {message.content}</div>
            </div>
        )
    }

    return (
        <>
            <h4>Message get</h4>
            <Button variant="contained" color="primary" onClick={onClick}>
                Get message!
            </Button>
            {generateMessage(database)}
        </>
    )
}




export default requireAuth(GetMessage)