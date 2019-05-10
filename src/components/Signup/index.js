import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';
import * as usersActions from '../../actions/users';
import TextInput from '../Layout/TextInput';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      birthDate: '',
      kindUser: 'patient',
      userName: '',
      password: '',
      confirmPassword: '',
    };
  }

  onChange = (e) => {
    e.preventDefault();
    const { target } = e;
    const value = target.type === 'select' ? target.label : target.value;

    const { name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      lastName,
      birthDate,
      selectedOption,
      userName,
      password,
      confirmPassword,
      kindUser,
    } = this.state;

    const newUser = {
      name,
      lastName,
      birthDate,
      selectedOption,
      userName,
      password,
      confirmPassword,
      kindUser,
    };

    const { addUser } = this.props;

    addUser(newUser);

    const { history } = this.props;
    history.push('/login');
  };

  render() {
    const options = [{ id: 1, option: 'Patient' }, { id: 2, option: 'Doctor' }];
    const {
      name, lastName, birthDate, kindUser, userName, password, confirmPassword,
    } = this.state;
    return (
      <div className="container col-8" style={{ paddingTop: '10px' }}>
        <div className="card mb-3 ">
          <div className="card-header text-center">Sign Up</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group text-left" style={{ fontFamily: 'courier' }}>
                <TextInput
                  label="Enter with your name:"
                  name="name"
                  type="text"
                  value={name}
                  onChange={this.onChange}
                />
                <TextInput
                  label="Enter with your last name:"
                  name="lastName"
                  type="text"
                  value={lastName}
                  onChange={this.onChange}
                />
                <TextInput
                  label="Bithdate:"
                  name="birthDate"
                  type="date"
                  value={birthDate}
                  onChange={this.onChange}
                />
                <FormGroup>
                  <Label for="kinduser" key="kindLabel">
                    Select you User Kind
                  </Label>
                  <Input
                    type="select"
                    name="kindUser"
                    id="kinduser"
                    value={kindUser}
                    key={kindUser}
                    onChange={this.onChange}
                  >
                    {options.map(kindOption => (
                      <option key={kindOption.id}>{kindOption.option}</option>
                    ))}
                  </Input>
                </FormGroup>

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

                <TextInput
                  label="Confirm your password:"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={this.onChange}
                />
                <input type="submit" value="Signup" className="btn btn-primary btn-block" />
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
});

const mapDispatchToProps = dispatch => bindActionCreators(usersActions, dispatch);

Signup.propTypes = {
  addUser: PropTypes.func.isRequired,
  history: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
