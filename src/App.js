import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import Header from './components/Layout/Header';
import Home from './components/Pages/Home';
import Appointments from './components/Appointments';
import Login from './components/Login';
import Signup from './components/Signup';
import store from './store';

class App extends React.Component {
  state = {
    users: [],
  };

  adduser = (newUser) => {
    const { users } = this.state;
    const newUsersArr = users.push(newUser);
    this.setState({
      users: newUsersArr,
    });
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header branding="Healt Agenda" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/appointments" component={Appointments} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signout" component={Home} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
