import React from 'react';
import { Switch, Route } from 'react-router';

import Pages from './pages/common/Pages'
import HelpPage from './pages/HelpPage';
import JsonPage from './pages/JsonPage';

export default (
  <Switch>
    <Route exact path={Pages.Json} component={JsonPage} />
    <Route exact path={Pages.Help} component={HelpPage} />
  </Switch>
);
