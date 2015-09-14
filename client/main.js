import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import user from './reducers/user';
import App from './containers/App';

const rootElement = document.querySelector(document.currentScript.getAttribute('data-container'));
const store = createStore(combineReducers({ user }));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
