import React from 'react';
import propTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.css';

const Header = (props) => {
  const { branding } = props;
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-primary md-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
      </div>
    </div>
  );
};

Header.propTypes = {
  branding: propTypes.string.isRequired,
};

export default Header;
