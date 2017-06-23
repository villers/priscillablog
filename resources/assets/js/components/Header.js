import React from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const color = 'pink';

const HeaderComponent = () => (
  <Segment vertical textAlign="center" className="background-header" color={color}>
    <Header as="h2" icon textAlign="center" color="pink">
      <Header.Content>
        <NavLink to="/" style={{ color }}>Mickaël la Bitch</NavLink>
      </Header.Content>
      <NavLink to="/" style={{ color }}>
        <Icon name="like" circular />
      </NavLink>
      <Header.Subheader />
    </Header>
  </Segment>
);

export default HeaderComponent;
