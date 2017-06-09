import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import Navigation from './Navigation';

const color = 'pink';

const HeaderComponent = () => (
  <Segment vertical textAlign="center" className="segment__header" color={color}>
    <Container>
      <Navigation />
    </Container>
  </Segment>
);

export default HeaderComponent;
