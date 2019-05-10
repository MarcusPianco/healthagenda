import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Layout/Header';
import Home from './components/Pages/Home';
import Appointments from './components/Appointments';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => (
  <Router>
    <div className="App">
      <Header branding="Healt Agenda" />
      <div className="container">
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/appointments" component={Appointments} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signout" component={Home} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
