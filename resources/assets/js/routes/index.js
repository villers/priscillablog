import React from 'react';
import { Route, Switch } from 'react-router';

import App from '../pages/App';
import PostsIndex from '../pages/PostsIndex';

const routes = (
  <App>
    <Switch>
      <Route path="/" component={PostsIndex} />
    </Switch>
  </App>
);

export default routes;
