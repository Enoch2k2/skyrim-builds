import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import '../stylesheets/nav.css';

import { logout, isLoggedIn } from '../actions/auth';

export class Nav extends Component {
  handleLogout = () => {
    this.props.logout(this.props.history)
  }

  render() {
    let links = this.props.currentUser || isLoggedIn() ? [
      <li key={1}><Link to="#">Characters</Link></li>,
      <li key={2}><Link to="#">Create Character</Link></li>,
      <li key={3}><Link to="#" onClick={ this.handleLogout }>Logout</Link></li>
    ] : [
      <li key={1}><Link to="/signup">Signup</Link></li>,
      <li key={2}><Link to="/login">Login</Link></li>
    ]

    return (
      <nav className="clearfix">
        <Link to="/" className="home-link">Home</Link>
        <ul>
          { links }
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps, { logout })(Nav);
