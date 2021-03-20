/* eslint-disable react/prop-types */
import React from 'react';
// react-router-dom 依赖包含了 react-router， 所以不用显式安装react-router
import { 
    BrowserRouter as Router, 
    HashRouter,
    Route, 
    Switch, 
    useRouteMatch,
    useParams,
    Link
} from 'react-router-dom';
import App from './app';

// a page
function APage() {
    return <React.Fragment>
        <div>this is a page</div>
        <Link to={{pathname: '/b', state: { name: 'a' } }}>go to Bpage</Link>
    </React.Fragment>;
}

// b page
function BPage({match, history, location}) {
    console.log('useParams', useParams(), match, history, location);
    return <React.Fragment>
        <div>this is b page</div>
        <Link to={{pathname: '/a', state: { name: 'b' } }} replace>go to Apage</Link>
    </React.Fragment>;
}

// NotFoundPage
function NotFoundPage(){
    return <div>PAGE NOT FOUND</div>;
}

export default class RouterApp extends React.Component {
    render() {
        return <React.Fragment>
            <Router>
                <Switch>
                    <Route exact={true} path="/" component={() => import(App)}></Route>
                    <Route path="/a" component={APage}></Route>
                    <Route path="/b/:path?/:id?" component={BPage}></Route>
                    <Route path="*" component={NotFoundPage}></Route>
                </Switch>
            </Router>
        </React.Fragment>;
    }
}