import React from 'react';
import PropTypes from 'prop-types';
import { Container, Divider } from 'semantic-ui-react';
import AppContainer from '../containers/AppContainer';
import Header from '../components/Header';
import Brand from '../components/Brand';

export default class App extends React.PureComponent {
  render() {
    return (
      <AppContainer>
        <Header />
        <Divider hidden />
        <Container>
          <Brand />
          {this.props.children}
        </Container>
      </AppContainer>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};
