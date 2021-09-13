import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

function ProtectedRoute(props) {
    const {user, checked} = useSelector(state => state.user)

    if(!checked){
        return <Spinner animation="border" variant="secondary" role="status" />
    } 

    if (!user) {
        return <Redirect to="/login"/>
    }

    return (
        <Route {...props}>
            {props.children}
        </Route>
    )
}

export default ProtectedRoute