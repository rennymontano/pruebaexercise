import React, { Fragment } from 'react'
import './App.css'
import Routes from './Routes'
import AppNav from './funciones/AppNav'
import AppFooter from './funciones/AppFooter'

function App() {
    return (
     <Fragment>
        <AppNav />
        <Routes />
        <AppFooter />
     </Fragment>

    )
}

export default App;
