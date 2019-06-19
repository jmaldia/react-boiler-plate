// MODULES
import React from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
// COMPONENTS
import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/DashboardPage';
import PageNotFound from '../components/PageNotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
// TODO: Import components
// √ Add NotFoundPage component
// √ Add header component
// Add Routes: create, edit id, help, not found, login

export const history = createHistory();

const AppRouter = () => (
    <Router history={ history }>
        <div>
            <Switch>
                <PublicRoute path="/" component={ LoginPage } exact={ true }/>
                <PrivateRoute path="/dashboard" component={ DashboardPage } />
                <Route component={ PageNotFound }/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;