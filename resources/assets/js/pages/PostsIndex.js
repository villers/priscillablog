import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'semantic-ui-react';
import { StickyContainer, Sticky } from 'react-sticky';

import Header from '../components/Header';
import PostsListContainer from '../containers/PostsListContainer';
import Navigation from '../components/Navigation';


const PostsIndex = () => (
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
    <PostsListContainer />
  </div>
);

PostsIndex.defaultProps = {
};

PostsIndex.propTypes = {
};

export default PostsIndex;
