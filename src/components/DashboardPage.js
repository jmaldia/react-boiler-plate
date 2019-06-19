// MODULES
import React from 'react';
// COMPONENTS
import { Route, NavLink } from 'react-router-dom';
//COMPONENTS

const Dashboard = ({ match }) => (
        <div className="header-dasboard__nav">
            <NavLink to={ `${ match.url }/calendar` } activeClassName="header-dasboard__nav__is-active">Calendar</NavLink>
            <NavLink to={ `${ match.url }/list` } activeClassName="header-dasboard__nav__is-active">List</NavLink>
            <div>
                {
                    // <Route path={ `${ match.url }/calendar` } component={ DashboardCalendarView }/>
                    // <Route path={ `${ match.url }/list` } component={ DashboardListView }/>
                    // <Redirect from={ `${ match.url }` } to={ `${ match.url }/calendar` }/>
                }
        </div>
    </div>
);

export default Dashboard;