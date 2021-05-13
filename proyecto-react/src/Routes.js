import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeComponent from './components/HomeComponent';
import FormComponent from './components/FormComponent'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/home" component= {HomeComponent} />
            <Route exact path="/" component= {HomeComponent} />
            <Route exact path="/form-detalle/:id" component = {FormComponent} />
        </Switch> 
    )
}

export default Routes;