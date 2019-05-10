import React, { Component } from 'react';

class Login extends Component {
  state = {
    userName: '',
    password: '',
  };

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
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
                <label htmlFor="name">Enter with your user:</label>
                <input
                  name="userName"
                  placeholder="your user..."
                  className="form-control form-control-lg"
                  type="text"
                  value={userName}
                  onChange={this.onChange}
                />
                <label htmlFor="name">Enter with your password:</label>
                <input
                  name="password"
                  placeholder="your pasword..."
                  className="form-control form-control-lg"
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
export default Login;
