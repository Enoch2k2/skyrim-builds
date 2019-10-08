import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';

import Home from './containers/Home';

export class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route render={props => <h1>Not Found</h1>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
