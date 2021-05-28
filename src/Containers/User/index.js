import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './HomePage';
import Login from './login/Loing';

const UserHome = (url) => {
    alert(url)
    return (
        <>
            <Route exact path={`/user/`} component={HomePage} />
            <Route exact path={`/user/login`} component={Login}  />
        </>
    )
}

export default UserHome
