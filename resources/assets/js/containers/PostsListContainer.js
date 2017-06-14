import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';


import { loadPosts } from '../actions/posts';
import Post from '../components/Post';

class PostsListContainer extends React.PureComponent {
  componentWillMount() {
    this.props.fetch();
  }

  renderPosts() {
    const { posts } = this.props;
    return posts.data && posts.data.map(post => (
      <Grid.Column key={post.id}>
        <Post
          body={post.summary}
          commentCounter={post.comment_count}
          created_at={post.created_at}
          key={post.id}
          id={post.id}
          image={'http://lorempixel.com/400/400/animals/'}
          lastEditDate={post.updated_at}
          score={post.favorite_count}
          tags={post.tags}
          viewCount={post.view_count}
          pictureState
        />
      </Grid.Column>
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
      <Grid stackable divided padded columns={2}>
        <Grid.Row>
          <Grid.Column computer={12} mobile={16} tablet={11}>
            <Grid doubling columns={3}>
              {this.renderPosts()}
            </Grid>
          </Grid.Column>
          <Grid.Column computer={4} mobile={16} tablet={5}>
            <div>right col1</div>
            <div>right col2</div>
            <div>right col3</div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
