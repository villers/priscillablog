import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Container, Grid, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { loadPosts } from '../actions/posts';

class PostsListContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    this.props.fetch();
  }

  onClick() {
    console.log('clicked');
  }

  renderPosts() {
    const { posts } = this.props;

    return posts.data && posts.data.map(post => (
      <Card
        key={post.id}
        image="http://lorempicsum.com/futurama/350/200/1"
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

  render() {
    const { loading, error } = this.props;

    if (loading) {
      return <div size="big" />;
    } else if (error) {
      return <div className="alert alert-danger">Error: {error.message}</div>;
    }

    return (
      <Container>
        <Card.Group itemsPerRow={3}>
          {this.renderPosts()}
        </Card.Group>
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
  posts: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
};

const mapStateToProps = state => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
  error: state.posts.error,
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(loadPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsListContainer);
