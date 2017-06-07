// - Import react components
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Card,
  Icon,
  Menu,
  Divider,
  Button,
  Embed,
  Popup,
} from 'semantic-ui-react';

// - Create Post component class
export default class PostComponent extends PureComponent {

  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.body,
      readMoreState: false,
    };

    // Binding functions to this
    this.handleReadMore = this.handleReadMore.bind(this);
  }

  handleReadMore() {
    if (this.readMoreState) {
      this.setState({
        readMoreState: false,

      });
    } else {
      this.setState({
        readMoreState: true,

      });
    }
  }

  // Render DOM
  render() {
    // Define variables

    const postImage = this.props.image;
    const postStyle = {
      backgroundImage: `url(${postImage})`,
    };
    return (

      <Card fluid>
        {
          this.props.pictureState
            ? <div className={this.props.image ? 'post__image' : ''} style={postStyle} />
            : <Embed id="O6Xo21L0ybE" placeholder="" source="youtube" />
        }


        <Card.Content>
          <Card.Header>

            <Popup
              trigger={<Icon className="right floated " name="ellipsis vertical" style={{ cursor: 'pointer' }} color="teal" size="large" />}
              flowing
              hoverable
              size="tiny"
              position="left center"
            >


              <Button circular icon="edit" as="div" color="teal" />
              <Button circular icon="cancel" as="div" />

            </Popup>

          </Card.Header>
          <Card.Meta>
            <span className="post__date">
              {moment(this.props.created_at).format('MMM Do YYYY @ h:mm a')}
            </span>
          </Card.Meta>
          <Card.Description>
            {this.state.text}

            <Popup
              trigger={<Icon name="ellipsis horizontal" style={{ cursor: 'pointer' }} color="teal" size="big" onClick={this.handleReadMore} />}
              content="Read more..."
              position="right center"
              size="tiny"

            />
          </Card.Description>
        </Card.Content>
        <Card.Content extra className="attached">
          <Menu secondary>
            <Button
              color="red"
              icon="heart"
              labelPosition="right"
              label={{
                basic: true,
                color: 'red',
                pointing: 'left',
                content: this.props.score,
              }}
            />

            <Menu.Menu position="right">
              <Button
                color="grey"
                icon="comment"
                labelPosition="right"
                label={{
                  basic: true,
                  color: 'grey',
                  pointing: 'left',
                  content: this.props.commentCounter,
                }}
              />

            </Menu.Menu>
          </Menu>
        </Card.Content>
        <Divider fitted />
      </Card>

    );
  }
}

PostComponent.defaultProps = {
  pictureState: true,
};

PostComponent.propTypes = {
  body: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  pictureState: PropTypes.boolean,
  created_at: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  commentCounter: PropTypes.number.isRequired,
};

