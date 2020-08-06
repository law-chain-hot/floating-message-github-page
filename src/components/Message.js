import React, { useState } from 'react'
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux'
import axios from 'axios'
import { IP } from '../reducers/actions/serverIP'

import requireAuth from './requireAuth'


// import { useAuth0 } from "@auth0/auth0-react";

const Message = (props) => {
    // const { handleSubmit } = props
    // const { user, isAuthenticated } = useAuth0();
    const [ name, setName ] = useState('')
    const [ content, setContent ] = useState('')


    const onSubmit = async (data) => {
        const postData = {
            name: name,
            content: content
        }
        console.log(postData)
        axios.post(`${IP}/postmessage`, postData)
        // axios.post(`http://localhost:3090/postmessage`, postData)
        setName('')
        setContent('')
        data.preventDefault()
    }

    return (
        <>
            <h4>Post message</h4>
            <form onSubmit={onSubmit}>
                <label>name</label>
                <input
                    name="name"
                    type="text"
                    component="input"
                    autoComplete="none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>content</label>
                <textarea
                    name="content"
                    type="text"
                    component="input"
                    autoComplete="none"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <button type='submit'>Submit!</button>
            </form>
        </>
    )
}


// export default compose(
//     connect(mapStateToProps, actions),
//     reduxForm({ form: 'signin' })
// )(Signin)


export default requireAuth(Message)