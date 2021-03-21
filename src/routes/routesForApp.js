import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Routes } from './routes';

export default class RoutesForApp extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <React.Fragment>
            <Router>
                <Switch>
                    {
                        Routes.map(route => 
                            <Route key={route.path} exact={route.exact} path={route.path} component={route.component}></Route>
                        )
                    }
                    <Route path={'*'} render={_ => <Redirect to={'/'}/>}></Route>
                </Switch>
            </Router>
        </React.Fragment>;
    }
}