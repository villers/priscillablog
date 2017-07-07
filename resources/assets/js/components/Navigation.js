import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { Button, Container, Dropdown, Menu, Search } from 'semantic-ui-react';

const color = 'pink';

export class NavigationComponent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleItemClick = this.handleItemClick.bind(this);
    this.state = {
      activeItem: 'accueil',
    };
  }

  handleItemClick(name, url) {
    const { moveTo } = this.props;

    console.log(name, url)
    moveTo(url);
  }

  render() {
    const { activeItem } = this.state;
    const { style } = this.props;

    const menu = {
      generalite: [
        { key: 1, text: 'Introduction', value: 1 },
        { key: 2, text: 'Présentation de l\'octodon', value: 2 },
        { key: 3, text: 'Devenir propriétaire', value: 3 },
        { key: 4, text: 'L\'alimentation', value: 4 },
        { key: 5, text: 'Carnet de santé', value: 5 },
        { key: 6, text: 'Transporter un octodon', value: 6 },
        { key: 7, text: 'Laisser son animal chez sois', value: 7 },
        { key: 8, text: 'Faire garder son animal', value: 8 },
      ],
      pimmy: [
        { key: 1, text: 'Introduction', value: 1 },
        { key: 2, text: 'Carte d\'identité', value: 2 },
        { key: 3, text: 'Test alimentaire', value: 3 },
        { key: 4, text: 'Test objests', value: 4 },
        { key: 5, text: 'Journal intime', value: 5 },
      ],
    };

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
          <Menu.Item name="accueil" content="Accueil" onClick={(e, name) => this.handleItemClick(name, '/')} />
          <Dropdown name="generalite" text="Généralité" item simple options={menu.generalite} onClick={(e, name) => this.handleItemClick(name, '/')} />
          <Dropdown name="pimmy" text="Pimmy" item simple options={menu.pimmy} onClick={(e, name) => this.handleItemClick(name, '/')} />

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
