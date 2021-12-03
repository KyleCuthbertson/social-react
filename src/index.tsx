import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// eslint-disable-next-line
import firebase from './utils/firebaseConfig';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
