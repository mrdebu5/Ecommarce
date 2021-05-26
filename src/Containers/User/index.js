import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './HomePage'

const UserHome = () => {
    return (
        <>
            <Route exact path={`/`} component={HomePage} />
        </>
    )
}

export default UserHome
