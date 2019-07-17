import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createMemoryHistory } from 'history';
import routes from './routes';
import configureStore from './store';

import MainMenu from './containers/MainMenu';


const syncHistoryWithStore = (store, history) => {
  const { router } = store.getState();
  if (router && router.location) {
    history.replace(router.location);
  }
};

const initialState = {};
const routerHistory = createMemoryHistory();


syncHistoryWithStore(store, routerHistory);


const rootElement = document.querySelector(document.currentScript.getAttribute('data-container'));

ReactDOM.render(
  <Provider store={store}>
    <MainMenu>
      <ConnectedRouter history={routerHistory}>{routes}</ConnectedRouter>
    </MainMenu>
  </Provider>,
  rootElement,
);
