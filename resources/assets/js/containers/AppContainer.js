import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
