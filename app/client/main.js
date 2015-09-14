import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, combineReducers } from 'redux';
import { devTools } from 'redux-devtools';
import { Provider } from 'react-redux';
import user from './reducers/user';
import App from './containers/App';

const isDevelopment = process.env.NODE_ENV === 'development';
const appCreateStore = isDevelopment ? compose(devTools())(createStore) : createStore;
const store = appCreateStore(combineReducers({ user }));
const rootElement = document.querySelector(document.currentScript.getAttribute('data-container'));

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    { isDevelopment && do {
      const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>;
    } }
  </div>,
  rootElement
);
