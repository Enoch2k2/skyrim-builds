import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/nav.css';
export class Nav extends Component {
  render() {
    return (
      <nav className="clearfix">
        <Link to="/" className="home-link">Home</Link>
        <ul>
          <li><Link to="#">Signup</Link></li>
          <li><Link to="#">Login</Link></li>
          <li><Link to="#">Characters</Link></li>
          <li><Link to="#">Create Character</Link></li>
          <li><Link to="#">Logout</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav
