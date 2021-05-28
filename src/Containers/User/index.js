import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './HomePage';
import Login from './login/Loing';

const UserHome = (props) => {
    return (
        <>
            <Route exact path={`${props.url}/`} component={HomePage} />
            <Route exact path={`${props.url}/login/`} component={Login}  />
        </>
    )
}

export default UserHome
