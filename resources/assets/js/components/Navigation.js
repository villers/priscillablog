import React from 'react';
import { Button, Dropdown, Menu, Search } from 'semantic-ui-react';

const color = 'pink';

export default class NavigationComponent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleItemClick = this.handleItemClick.bind(this);
    this.state = {
      activeItem: 'Accueil',
    };
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size="tiny" color={color} stackable fluid borderless inverted >
        <Menu.Item name="accueil" content="Accueil" active={activeItem === 'Accueil'} onClick={this.handleItemClick} />
        <Menu.Item name="generalite" content="Généralité" active={activeItem === 'generalite'} onClick={this.handleItemClick} />

        <Menu.Menu position="right">
          <Dropdown item text="Langue">
            <Dropdown.Menu>
              <Dropdown.Item>Français</Dropdown.Item>
              <Dropdown.Item>Anglais</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>S'inscrire</Button>
          </Menu.Item>

          <Menu.Item>
            <Search />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
