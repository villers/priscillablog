import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'semantic-ui-react';
import { Sticky, StickyContainer } from 'react-sticky';

import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Layout = ({ children }) => (
  <div>
    <Header />
    <StickyContainer>
      <Sticky >
        { ({ distanceFromTop }) => {
          const style = (distanceFromTop <= 0) ? {
            position: 'fixed',
            top: 0,
            left: 0,
            overflowY: 'auto',
            zIndex: 9999,
          } : {};
          return <Navigation style={style} />;
        }}
      </Sticky>
    </StickyContainer>
    <Divider hidden />
    {children}
  </div>
);

Layout.defaultProps = {
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
