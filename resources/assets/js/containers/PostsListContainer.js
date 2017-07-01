import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Container, Dimmer, Grid, Icon, Loader, Message } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { push } from 'react-router-redux';

import { loadPosts } from '../actions/posts';
import Paginate from '../components/Paginate';

class PostsListContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.paginateClick = this.paginateClick.bind(this);
  }

  componentWillMount() {
    const { fetch } = this.props;

    const page = this.context.router.route.match.params.page || 1;

    fetch(page);
  }

  onClick() {
    console.log('clicked');
  }

  paginateClick(page) {
    const { fetch, moveTo } = this.props;

    moveTo(`/page/${page}`);
    fetch(page);
  }

  renderPosts() {
    const { posts } = this.props;

    return posts.data && posts.data.map(post => (
      <Card
        key={post.id}
        image={post.image}
        header={post.title}
        meta={
          post.created_at
        }
        description={post.summary}
        onClick={this.onClick}
        as={'div'}
        link
        extra={
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <NavLink to="/">
                  <Icon name="comment outline" />
                  {post.comment_count}
                </NavLink>
              </Grid.Column>
              <Grid.Column textAlign="right">
                <NavLink to="/">{post.category.name}</NavLink>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        }
      />
    ));
  }

  renderPaginate() {
    const { posts } = this.props;

    return posts.current_page && posts.last_page && (
      <Paginate
        currPage={posts.current_page}
        lastPage={posts.last_page}
        onChange={this.paginateClick}
      />
    );
  }

  renderError() {
    const { error } = this.props;

    return (
      <Message negative>
        <Message.Header>Error</Message.Header>
        <p>{error.message}</p>
      </Message>
    );
  }

  render() {
    const { loading, error } = this.props;

    return (
      <Container>
        <Dimmer active={loading}>
          <Loader />
        </Dimmer>

        {error && this.renderError()}

        <Card.Group itemsPerRow={3}>
          {this.renderPosts()}
        </Card.Group>

        {this.renderPaginate()}
      </Container>
    );
  }
}

PostsListContainer.defaultProps = {
  error: null,
  posts: [],
};

PostsListContainer.propTypes = {
  fetch: PropTypes.func.isRequired,
  moveTo: PropTypes.func.isRequired,
  posts: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
};

PostsListContainer.contextTypes = {
  router: PropTypes.object,
};

const mapStateToProps = state => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
  error: state.posts.error,
});

const mapDispatchToProps = dispatch => ({
  fetch: page => dispatch(loadPosts(page)),
  moveTo: url => dispatch(push(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsListContainer);
