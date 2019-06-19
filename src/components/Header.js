import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../redux/actions/auth';

const Header = ({ startLogout }) => (
    <div className="header-main"> 
        <NavLink to="/" exact={ true }>
            <img src="https://chorelyapp.com/assets/img/logo_transparent_bg.png" alt="Chorely Logo" />
        </NavLink>
        <div className="header-main__nav">
            <NavLink to="/dashboard/calendar" activeClassName="is-active">Dashboard</NavLink>
            <NavLink to="/stats" activeClassName="is-active">Stats</NavLink>
            <NavLink to="/add" activeClassName="is-active">Add</NavLink>
            <button onClick={ startLogout }>Log out</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);