import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Menu, Search } from 'semantic-ui-react';

const color = 'pink';

export default class NavigationComponent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleItemClick = this.handleItemClick.bind(this);
    this.state = {
      activeItem: 'accueil',
    };
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
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
          <Menu.Item name="accueil" content="Accueil" active={activeItem === 'accueil'} onClick={this.handleItemClick} />
          <Menu.Item name="generalite" content="Généralité" active={activeItem === 'generalite'} onClick={this.handleItemClick} />

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
};
