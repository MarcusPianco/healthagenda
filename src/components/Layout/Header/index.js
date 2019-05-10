import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Header = (props) => {
  const { branding } = props;
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-primary md-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <React.Fragment>
          <ul className="navbar-nav nav-auto">
            <li className="nav-item navbar-brand">
              <Link to="/home" className="nav-link">
                <i className="fas fa-home" />
                Home
              </Link>
            </li>
            <li className="nav-item navbar-brand">
              <Link to="/login" className="nav-link">
                <i className="fas fa-user" />
                Login
              </Link>
            </li>
            <li className="nav-item navbar-brand">
              <Link to="/signup" className="nav-link">
                <i className="fas fa-user-plus" />
                Signup
              </Link>
            </li>
            <li className="nav-item navbar-brand">
              <Link to="/appointments" className="nav-link">
                {' '}
                <i className="fas fa-heartbeat" />
                Appointments
              </Link>
            </li>
            <li className="nav-item navbar-brand">
              <Link to="/home" className="nav-link">
                {' '}
                <i className="fas fa-sign-out-alt" />
                Logout
              </Link>
            </li>
          </ul>
        </React.Fragment>
      </div>
    </div>
  );
};

Header.propTypes = {
  branding: propTypes.string.isRequired,
};

export default Header;
