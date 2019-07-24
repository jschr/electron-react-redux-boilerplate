import React from 'react';
import { Switch, Route } from 'react-router';

import Pages from 'Pages/common/Pages';
import InfoPage from 'Pages/InfoPage';
import ExamplePage from 'Pages/ExamplePage';

export default (
  <Switch>
    <Route exact path={Pages.Json} component={ExamplePage} />
    <Route exact path={Pages.Help} component={InfoPage} />
  </Switch>
);
