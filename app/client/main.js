import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import user from './reducers/user';
import App from './containers/App';
import DevTools from './containers/DevTools';

const initialState = {};

const isDevelopment = process.env.NODE_ENV === 'development';

const enhancer = isDevelopment ? compose(
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
) : undefined;

const store = createStore(combineReducers({ user }), initialState, enhancer);
const rootElement = document.querySelector(document.currentScript.getAttribute('data-container'));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      { isDevelopment && <DevTools /> }
    </div>
  </Provider>,
  rootElement
);
