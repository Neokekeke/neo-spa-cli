import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes } from './routes';
import React from 'react';
import App from '../container/app';

export default class RoutesForApp extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <React.Fragment>
            <Router>
                <Switch>
                    {
                        Routes.map(route => <Route key={route.path} path={route.path} component={route.component}></Route>)
                    }
                </Switch>
            </Router>
        </React.Fragment>;
    }
}