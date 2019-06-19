import React from 'react';
import { connect } from 'react-redux'; 
import { startLogin } from '../redux/actions/auth'

const LoginPage = ({ startLogin }) => (
    <div className="login-page">
        <img className="login-page__logo" src="https://chorelyapp.com/assets/img/logo_transparent_bg.png" alt="Google Sign In Button"  onClick={ startLogin } />
        <img className="login-page__button" src="https://chorelyapp.com/assets/img/google_signin_buttons/web/1x/btn_google_signin_light_normal_web.png" alt="Google Sign In Button"  onClick={ startLogin } />
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

// <input type="text" name="username" placeholder="Username"></input>
// <input type="password" name="password" placeholder="Password"></input>