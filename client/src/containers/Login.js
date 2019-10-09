import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

export class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      password_confirmation: ''
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state, this.props.history);
  }

  render() {
    return (
      <div className="pad-25">
        <div className="errors"></div>
        <h1 className="center">Login</h1>
        <form onSubmit={ this.handleSubmit }>
          <div className="input-field">
            <label htmlFor="username">Username: </label>
            <input type="text" 
                   name="username"
                   id="username"
                   value={ this.state.username }
                   onChange={ this.handleChange } />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password: </label>
            <input type="password"
                   name="password"
                   id="password"
                   value={ this.state.password }
                   onChange={ this.handleChange } />
          </div>
          <input type="submit" value="Create Account" className="btn" />
        </form>
      </div>
    )
  }
}

export default connect(null, { login })(Login);
