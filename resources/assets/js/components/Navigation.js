import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { Button, Container, Menu, Search } from 'semantic-ui-react';

const color = 'pink';

export class NavigationComponent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleItemClick = this.handleItemClick.bind(this);
    this.state = {
      activeItem: 'accueil',
    };
  }

  handleItemClick(item, url) {
    const { moveTo } = this.props;
    this.setState({ activeItem: item.name });
    moveTo(url);
  }

  render() {
    const { activeItem } = this.state;
    const { style } = this.props;

    return (
      <Menu
        size="tiny"
        color={color}
        stackable
        fluid
        borderless
        inverted
        className="menu_header"
        style={style}
      >
        <Container>
          <Menu.Item name="accueil" content="Accueil" active={activeItem === 'accueil'} onClick={(e, name) => this.handleItemClick(name, '/')} />
          <Menu.Item name="generalite" content="Généralité" active={activeItem === 'generalite'} onClick={(e, name) => this.handleItemClick(name, '/')} />

          <Menu.Menu position="right">
            <Menu.Item>
              <a href="/admin">
                <Button primary>Administration</Button>
              </a>
            </Menu.Item>

            <Menu.Item>
              <Search />
            </Menu.Item>

          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

NavigationComponent.propTypes = {
  style: PropTypes.shape({}).isRequired,
  moveTo: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  moveTo: url => dispatch(push(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationComponent);
