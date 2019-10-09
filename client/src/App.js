import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Nav from './components/Nav';

import Home from './containers/Home';
import Signup from './containers/Signup';
import Login from './containers/Login';

import { fetchCurrentUser } from './actions/auth';

export class App extends Component {
  componentDidMount() {

    if(localStorage.getItem('token') === "undefined") {
      localStorage.removeItem('token');
    }

    if (localStorage.getItem('token')) {
      this.props.fetchCurrentUser();
    }
  }

  render() {
    return (
      <Router>
        <Route render={props => <Nav { ...props } />} />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route render={props => <h1>Not Found</h1>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default connect(null, { fetchCurrentUser })(App);
