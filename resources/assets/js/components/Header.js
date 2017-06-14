import React from 'react';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';

const color = 'pink';

const HeaderComponent = () => (
  <Segment vertical textAlign="center" className="segment__header" color={color}>
    <Header as="h2" icon textAlign="center" color="pink">
      <Header.Content>
        <NavLink to="/" style={{ color }}>Mickaël la Bitch</NavLink>
      </Header.Content>
      <NavLink to="/" style={{ color }}>
        <Icon name="like" circular />
      </NavLink>
      <Header.Subheader />
    </Header>
    <Container>
      <Navigation />
    </Container>
  </Segment>
);

export default HeaderComponent;
