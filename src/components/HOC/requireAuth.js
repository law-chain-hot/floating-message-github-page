// name begins with lowercase, export by default a function

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useAuth0 } from "@auth0/auth0-react";

const requireAuth = (ChildComponent) => {
    const ComposedComponent = (props) => {
        const { user, isAuthenticated } = useAuth0();


        useEffect(() => {
            const shouldNavigateAway = () => {
                if (!props.auth && !isAuthenticated) {
                    props.history.push('/')
                }
            }
            shouldNavigateAway()
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [props.auth])

        return <ChildComponent {...props} />
    }

    const mapStateToProps = (state) => {
        return {
            auth: state.auth.authenticated
        }
    }

    return connect(mapStateToProps)(ComposedComponent)
}

export default requireAuth


// Imagine we are in CommentBox.js
// Using the HOC to add the requireAuth to goal component, 
// Like injecting the component into project