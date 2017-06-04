import React from 'react';
import { connect } from 'react-redux'
import {loadPosts} from '../actions/posts';
import { Link } from 'react-router-dom';
import {Button, CardPanel, Col, Preloader, Row} from "react-materialize";

class PostsList extends React.Component {
    componentWillMount() {
        this.props.fetch();
    }

    renderPosts(posts) {
        return posts.data && posts.data.map((post) => {
            return (
                <Row key={post.id}>
                    <Col s={12} m={12}>
                        <CardPanel className="teal lighten-4 black-text" title={post.title}>
                            <div>{post.summary}</div>
                            <Link style={{color:'black'}} to={"/posts/" + post.id}>
                                <Button waves='light'>Lire plus</Button>
                            </Link>
                        </CardPanel>
                    </Col>
                </Row>
            );
        });
    }

    render() {
        const { posts, loading, error } = this.props;

        if(loading) {
            return <Preloader size='big'/>;
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
