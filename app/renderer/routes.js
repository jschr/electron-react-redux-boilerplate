import React from 'react';
import { Switch, Route } from 'react-router';

import Pages from './pages/Pages'
import Help from './pages/Help';
import WebApp from './pages/WebApp';

export default (
  <Switch>
    <Route exact path={Pages.Help} component={Help} />
    <Route exact path={Pages.WebApp} component={WebApp} />
  </Switch>
);
