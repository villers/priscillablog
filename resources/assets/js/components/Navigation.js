import React from 'react';
import { Menu, Search } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


// - Feilds
const color = 'teal';

// - Create Navigation component class
export default class NavigationComponent extends React.PureComponent {

  // Counstructor
  constructor(props) {
    super(props);

    // Binding functions to `this`
    this.handleItemClick = this.handleItemClick.bind(this);

    this.state = {
      activeItem: 'home',
    };
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  // Render DOM
  render() {
    const { activeItem } = this.state;

    return (
      <Menu color={color} stackable fluid>
        <Menu.Item header>Priscilla</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item as="div" icon="newspaper" name="Blog" active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item as="div" name="logout" active={activeItem === 'Logout'} onClick={this.handleItemClick}>
            <NavLink className="ui blue button" to="/login">LOGIN</NavLink>
          </Menu.Item>
          <Menu.Item>
            <Search />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
