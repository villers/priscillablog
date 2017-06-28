import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'semantic-ui-react';
import { StickyContainer, Sticky } from 'react-sticky';

import Header from '../components/Header';
import PostsListContainer from '../containers/PostsListContainer';
import Navigation from '../components/Navigation';


const PostsIndex = ({ match }) => (
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
    <PostsListContainer page={match.params.page} />
  </div>
);

PostsIndex.defaultProps = {
  match: {},
};

PostsIndex.propTypes = {
  match: PropTypes.shape({}),
};

export default PostsIndex;
