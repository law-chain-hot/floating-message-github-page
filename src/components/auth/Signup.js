import React from 'react'
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../reducers/actions'

const Signup = (props) => {
    const { handleSubmit } = props

    const onSubmit = (formProps) => {
        const callback = () => props.history.push('/feature')
        props.signup(formProps, callback)
    }

    return (
        <>
            <h4>Sign up</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label>Email</label>
                    <Field
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <div>{props.errorMessage}</div>
                <button type='submit'>Submit!</button>
            </form>
        </>
    )
}

const mapStateToProps = function (state) {
    return { errorMessage: state.auth.errorMessage }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signup' })
)(Signup)

