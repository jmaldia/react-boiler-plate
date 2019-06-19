// MODULES 
import React from 'react';
import ReactDOM from 'react-dom';
// COMPONENTS
import App from './App';
// CSS
import './index.css';
// CUSTOM FILES
import * as serviceWorker from './serviceWorker';
import { history } from './routers/AppRouter';
import configureStore from './redux/store/configureStore';
import { login, logout } from './redux/actions/auth';
import { firebase } from './firebase/firebase';

const store = configureStore();
let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(<App store={ store }/>, document.getElementById('root'));
    hasRendered = true;
  }
}

const jsx = (
  <div className="loading-wrapper">
    <div className="loading"></div>
  </div>
);

ReactDOM.render(jsx, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {   
    store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
    // store.dispatch(startSetPoints())
    //   .then(() => {
    //     renderApp();
    //     if (history.location.pathname === '/') {
    //       history.push('/dashboard/calendar');
    //     }
    //   });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
