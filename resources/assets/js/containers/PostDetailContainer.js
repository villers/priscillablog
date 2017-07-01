
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Container, Dimmer, Grid, Icon, Loader, Message } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { push } from 'react-router-redux';

import Layout from '../components/Layout';
import { loadPost } from '../actions/post';

class PostDetailContainer extends React.PureComponent {
  componentWillMount() {
    const { fetch } = this.props;

    const slug = this.context.router.route.match.params.slug;

    fetch(slug);
  }

  renderPost() {
    const { post } = this.props;

    return post && (
      <Card
        key={post.id}
        image={post.image}
        header={post.title}
        meta={
          post.created_at
        }
        description={<div
          /* eslint-disable react/no-danger */
          dangerouslySetInnerHTML={{ __html: post.body }}
        />}
        as={'div'}
        link
        fluid
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
      <Layout>
        <Container>
          <Dimmer active={loading}>
            <Loader />
          </Dimmer>

          {error && this.renderError()}

          {this.renderPost()}
        </Container>
      </Layout>
    );
  }
}

PostDetailContainer.defaultProps = {
  error: null,
  post: null,
};

PostDetailContainer.propTypes = {
  fetch: PropTypes.func.isRequired,
  post: PropTypes.shape({}),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
};

PostDetailContainer.contextTypes = {
  router: PropTypes.object,
};

const mapStateToProps = state => ({
  post: state.post.post,
  loading: state.post.loading,
  error: state.post.error,
});

const mapDispatchToProps = dispatch => ({
  fetch: slug => dispatch(loadPost(slug)),
  moveTo: url => dispatch(push(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer);
