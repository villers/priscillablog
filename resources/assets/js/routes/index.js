import React from 'react';
import { Route, Switch } from 'react-router';

import PostsIndex from '../pages/PostsIndex';

const routes = (
  <Switch>
    <Route path="/" component={PostsIndex} />
  </Switch>
);

export default routes;
