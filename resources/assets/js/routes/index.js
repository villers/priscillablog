import React from 'react';
import { Route, Switch } from 'react-router';

import PostsIndex from '../pages/PostsIndex';

const routes = (
  <Switch>
    <Route exact path="/" component={PostsIndex} />
    <Route path="/page/:page" component={PostsIndex} />
  </Switch>
);

export default routes;
