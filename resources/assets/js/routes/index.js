import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './Layout';

const routes = (
  <Switch>
    <Route path="/" component={Layout} />
  </Switch>
);

export default routes;
