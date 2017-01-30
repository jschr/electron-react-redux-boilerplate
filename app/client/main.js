import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import reducers from './reducers';
import actionCreators from './actions';

const isDevelopment = process.env.NODE_ENV === 'development';
const initialState = {};

const composeEnhancers = (() => {
  const compose_ = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  if(isDevelopment && compose_) {
    return compose_({ actionCreators });
  }
  return compose;
})();

const store = createStore(combineReducers(reducers), initialState, composeEnhancers());
const rootElement = document.querySelector(document.currentScript.getAttribute('data-container'));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  rootElement
);
