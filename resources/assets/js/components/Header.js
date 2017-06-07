import React from 'react';
import { Header as SHeader, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => (
  <SHeader as="h2" icon textAlign="center">
    <NavLink to="/" style={{ color: 'white' }}>
      <Icon name="like" circular />
    </NavLink>
    <SHeader.Content>
      <NavLink to="/" style={{ color: 'white' }}>
        Priscilla
      </NavLink>
    </SHeader.Content>
    <SHeader.Subheader />
  </SHeader>
);

export default HeaderComponent;
