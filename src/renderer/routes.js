import React from 'react';
import { Switch, Route } from 'react-router';

import Pages from 'Pages/common/Pages'
import HelpPage from 'Pages/HelpPage';
import JsonPage from 'Pages/JsonPage';

export default (
  <Switch>
    <Route exact path={Pages.Json} component={JsonPage} />
    <Route exact path={Pages.Help} component={HelpPage} />
  </Switch>
);
