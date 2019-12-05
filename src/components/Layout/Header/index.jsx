import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsSession from '../../../store/actions/session';

class Header extends React.Component {
  state = {};

  render() {
    const { branding } = this.props;

    return (
      <div className="navbar navbar-expand-sm navbar-dark bg-primary md-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {branding}
          </a>
          <React.Fragment>
            <ul className="navbar-nav nav-auto">
              <li className="nav-item navbar-brand">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home" />
                  Home
                </Link>
              </li>
              {this.props.session.isLogin ? null : (
                <React.Fragment>
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
                </React.Fragment>
              )}

              {this.props.session.isLogin ? (
                <React.Fragment>
                  <li className="nav-item navbar-brand">
                    <Link to="/appointments" className="nav-link">
                      {' '}
                      <i className="fas fa-heartbeat" />
                      Appointments
                    </Link>
                  </li>
                  <li className="nav-item navbar-brand">
                    <Link to="/" className="nav-link" onClick={() => this.props.updateSession({})}>
                      <i className="fas fa-sign-out-alt" />
                      Logout
                    </Link>
                  </li>
                </React.Fragment>
              ) : null}
            </ul>
          </React.Fragment>
        </div>
      </div>
    );
  }
}
Header.propTypes = {
  branding: propTypes.string.isRequired,
};

const mapStateToProps = state => ({
  session: state.session,
});

const mapDispatchToProps = dispatch => bindActionCreators(actionsSession, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
