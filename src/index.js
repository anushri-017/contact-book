import React from 'react';
import ReactDOM from 'react-dom';
import  './Styles/index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import Store from './store';


ReactDOM.render(
<Provider  store = {Store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
