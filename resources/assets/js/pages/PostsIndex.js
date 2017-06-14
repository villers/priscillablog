import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import Header from '../components/Header';
import Brand from '../components/Brand';
import PostsListContainer from '../containers/PostsListContainer';

const PostsIndex = () => (
  <div>
    <Header />
    <Divider hidden />
    <Container>
      <Brand />
      <PostsListContainer />
    </Container>
  </div>
);

export default PostsIndex;
