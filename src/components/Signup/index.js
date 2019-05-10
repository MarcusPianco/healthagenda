import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Signup extends Component {
  state = {
    name: '',
    lastName: '',
    birthDate: '',
    isDoctor: false,
    address: {},
    userName: '',
    password: '',
    confirmPassword: '',
  };

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);
  };

  render() {
    const {
      name, lastName, birthDate, isDoctor, userName, password, confirmPassword,
    } = this.state;
    // const { address } = this.state;
    return (
      <div className="container col-8" style={{ paddingTop: '10px' }}>
        <div className="card mb-3 ">
          <div className="card-header text-center">Sign Up</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group text-left" style={{ fontFamily: 'courier' }}>
                <label htmlFor="name">Enter with your name:</label>
                <input
                  name="name"
                  placeholder="your name..."
                  className="form-control form-control-lg"
                  type="text"
                  value={name}
                  onChange={this.onChange}
                />
                <label htmlFor="name">Enter with your last name:</label>
                <input
                  name="lastName"
                  placeholder="your last name..."
                  className="form-control form-control-lg"
                  type="text"
                  value={lastName}
                  onChange={this.onChange}
                />
                <label htmlFor="name">Bithdate:</label>
                <input
                  name="birthDate"
                  placeholder="your birthdate..."
                  className="form-control form-control-lg"
                  type="text"
                  value={birthDate}
                  onChange={this.onChange}
                />
                <label htmlFor="name">Are you a doctor?:</label>
                <input
                  name="isDoctor"
                  placeholder="your name..."
                  className="form-control form-control-lg"
                  type="text"
                  value={isDoctor}
                  onChange={this.onChange}
                />
                <label htmlFor="name">Enter with your user:</label>
                <input
                  name="userName"
                  placeholder="your user name..."
                  className="form-control form-control-lg"
                  type="text"
                  value={userName}
                  onChange={this.onChange}
                />
                <label htmlFor="name">Enter with your password:</label>
                <input
                  name="password"
                  placeholder="your password..."
                  className="form-control form-control-lg"
                  type="password"
                  value={password}
                  onChange={this.onChange}
                />
                <label htmlFor="name">Confirm your password:</label>
                <input
                  name="confirmPassword"
                  placeholder="your password again..."
                  className="form-control form-control-lg"
                  type="password"
                  value={confirmPassword}
                  onChange={this.onChange}
                />
                <input type="submit" value="signup" className="btn btn-light btn-block" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
