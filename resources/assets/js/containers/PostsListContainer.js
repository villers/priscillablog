import React from 'react';
import { connect } from 'react-redux'
import {loadPosts} from '../actions/posts';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';


class PostsList extends React.Component {
    componentWillMount() {
        this.props.fetch();
    }

    renderPosts(posts) {
        return posts.data && posts.data.map((post) => {
            return (
                <div key={post.id}>
                    <div>{post.summary}</div>
                    <Link style={{color:'black'}} to={"/posts/" + post.id}>
                        <Button primary>Lire plus2</Button>
                    </Link>
                </div>
            );
        });
    }

    render() {
        const { posts, loading, error } = this.props;

        if(loading) {
            return <div size='big'/>;
        } else if(error) {
            return <div className="alert alert-danger">Error: {error.message}</div>;
        }
        return (
            <div className="container">
                <h1>Posts</h1>
                {this.renderPosts(posts)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts,
    loading: state.posts.loading,
    error: state.posts.error,
});

const mapDispatchToProps = dispatch => ({
    fetch: () => dispatch(loadPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
