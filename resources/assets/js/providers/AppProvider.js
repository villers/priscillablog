import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class AppProvider extends React.PureComponent {
  render() {
    return React.Children.only(this.props.children);
  }
}

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AppProvider);
