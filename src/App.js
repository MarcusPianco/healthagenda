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
import AddAppointments from './components/Appointments/AddAppointments';
import NotFound from './components/Pages/NotFound/Notound';

const App = () => (
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
            <Route exact path="/add-appointments" component={AddAppointments} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  </Provider>
);
export default App;
