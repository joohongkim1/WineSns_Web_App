import React from 'react';
import { Route, Redirect, BrowserRouter } from 'react-router-dom';
import {App} from '../App';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <BrowserRouter>
        <Switch>
    <Route path="/" exact={true} component={App} />

    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
    </Switch>
    </BrowserRouter>
)