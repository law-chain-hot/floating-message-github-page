import React, { useState, useEffect } from 'react'
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux'
import axios from 'axios'

import requireAuth from './HOC/requireAuth'

import Button from '@material-ui/core/Button';
import Card from './Card'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '5%'
    }

})

const IP = process.env.REACT_APP_SERVER

// import { useAuth0 } from "@auth0/auth0-react";

const GetMessage = (props) => {
    // const { handleSubmit } = props
    const classes = useStyles()
    // const { user, isAuthenticated } = useAuth0();
    const [database, setDatabase] = useState([])
    const [message, setMessage] = useState({})

    // console.log("GetMessage -> database", database)


    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`${IP}/getmessage`)
            setDatabase(response.data)
        }
        getData()

    }, [])


    const handleClick = () => {
        // generateMessage(database)
        if (database.length === 0) return
        const index = Math.floor(Math.random() * database.length)
        const currMes = database.splice(index, 1)[0]
        setMessage(currMes)
    }

    const generateMessage = (message) => {
        return (
            <Card
                name={message.name}
                content={message.content}
                like={message.like || 0}
                id={message._id}
            />
        )
    }

    return (
        <>
            <div className={classes.container}>
                <h4>Message get</h4>
                <Button variant="contained" color="primary" onClick={handleClick}>
                    Get message!
                </Button>
                {generateMessage(message)}
            </div>
        </>
    )
}




export default requireAuth(GetMessage)