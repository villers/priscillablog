import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import AppContainer from '../containers/AppContainer';
import Navigation from '../components/Navigation';
import Header from '../components/Header';

export default class App extends React.PureComponent {
  render() {
    return (
      <AppContainer>
        <Header />
        <Container>
          <Navigation />
        </Container>
        <Container>
          {this.props.children}
        </Container>
      </AppContainer>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};
