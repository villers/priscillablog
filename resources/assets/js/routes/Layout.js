import React from 'react';
import { Divider } from 'semantic-ui-react';
import { Route, Switch } from 'react-router';
import { Sticky, StickyContainer } from 'react-sticky';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import PostsListContainer from '../containers/PostsListContainer';
import NoMatchContainer from '../containers/NoMatchContainer';
import PostDetailContainer from '../containers/PostDetailContainer';

const Layout = () => (
  <div>
    <Header />
    <StickyContainer>
      <Sticky >
        { ({ distanceFromTop }) => {
          const style = (distanceFromTop <= 0) ? {
            position: 'fixed',
            top: 0,
            left: 0,
            overflowY: 'auto',
            zIndex: 9999,
          } : {};
          return <Navigation style={style} />;
        }}
      </Sticky>
    </StickyContainer>
    <Divider hidden />
    <Switch>
      <Route exact path="/" component={PostsListContainer} />
      <Route path="/blog/page/:page" component={PostsListContainer} />
      <Route path="/blog/:slug" component={PostDetailContainer} />
      <Route component={NoMatchContainer} />
    </Switch>
  </div>
);

Layout.defaultProps = {
};

Layout.propTypes = {
};

export default Layout;
