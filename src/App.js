// MODULES
import React from 'react';
import { Provider } from 'react-redux';
import './firebase/firebase';
// COMPONENTS
import AppRouter from './routers/AppRouter';
// CSS
import './styles/styles.scss';

const App = (props) => (
  <Provider store={ props.store }>
    <div className="app">
      <AppRouter />
    </div>
  </Provider>
);


export default App;