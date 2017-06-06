import React from 'react';
import PropTypes from 'prop-types';
import AppContainer from '../containers/AppContainer';

export default class App extends React.PureComponent {
  render() {
    return (
      <AppContainer>
        {this.props.children}
      </AppContainer>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};
