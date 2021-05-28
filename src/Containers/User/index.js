import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header/Header'
import HomePage from './HomePage/HomePage'

const UserHome = () => {
    return (
        <>
            <Header />
            <Route exact path={`/`} component={HomePage} />
        </>
    )
}

export default UserHome
