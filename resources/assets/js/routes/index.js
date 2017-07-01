import React from 'react';
import { Route, Switch } from 'react-router';

import PostsListContainer from '../containers/PostsListContainer';
import PostDetailContainer from '../containers/PostDetailContainer';

const routes = (
  <Switch>
    <Route exact path="/" component={PostsListContainer} />
    <Route path="/blog/page/:page" component={PostsListContainer} />
    <Route path="/blog/:slug" component={PostDetailContainer} />
  </Switch>
);

export default routes;
