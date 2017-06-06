import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { loadPosts } from '../actions/posts';

class PostsList extends React.Component {
  componentWillMount() {
    this.props.fetch();
  }

  renderPosts() {
    const { posts } = this.props;
    return posts.data &&
      posts.data.map(post => (
        <div key={post.id}>
          <div>{post.summary}</div>
          <Link style={{ color: 'black' }} to={`/posts/${post.id}`}>
            <Button primary>Lire plus2</Button>
          </Link>
        </div>
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
      <div className="container">
        <h1>Posts</h1>
        {this.renderPosts()}
      </div>
    );
  }
}

PostsList.defaultProps = {
  error: null,
  posts: [],
};

PostsList.propTypes = {
  fetch: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object),
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

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
