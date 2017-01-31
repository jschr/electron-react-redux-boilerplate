import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import user from '../reducers/user';
import userActions from '../actions/user';

const actionCreators = {
  ...userActions
};

const reducers = {
  user
};

const middlewares = [thunk];

const composeEnhancers = (() => {
  const compose_ = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  if(process.env.NODE_ENV === 'development' && compose_) {
    return compose_({ actionCreators });
  }
  return compose;
})();

const enhancer = composeEnhancers(applyMiddleware(...middlewares));
const rootReducer = combineReducers(reducers);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
