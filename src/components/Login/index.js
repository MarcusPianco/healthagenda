import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import { bindActionCreators } from 'redux';
import TextInput from '../Layout/TextInput';
import * as sessionActions from '../../actions/session';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { userName, password } = this.state;

    const user = {
      userName,
      password,
    };

    const { users } = this.props;

    const { updateSession } = this.props;

    users.forEach((element) => {
      if (element.userName === user.userName && element.password === user.password) {
        updateSession(element);
        return this.props.history.push('/appointments');
      }
      return <Alert>Error in Login</Alert>;
    });
  };

  render() {
    const { userName, password } = this.state;
    return (
      <div className="container col-8" style={{ paddingTop: '10px' }}>
        <div className="card mb-3 ">
          <div className="card-header text-center">Login</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group text-left" style={{ fontFamily: 'courier' }}>
                <TextInput
                  label="Enter with your user:"
                  name="userName"
                  type="text"
                  value={userName}
                  onChange={this.onChange}
                />
                <TextInput
                  label="Enter with your password:"
                  name="password"
                  type="password"
                  value={password}
                  onChange={this.onChange}
                />
                <input type="submit" value="Login" className="btn btn-primary btn-block" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  session: state.session,
});

const mapDispatchToProps = dispatch => bindActionCreators(sessionActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
