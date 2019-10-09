import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';

export class Signup extends Component {
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
    this.props.signup(this.state, this.props.history);
  }

  render() {
    return (
      <div className="pad-25">
        <div className="errors"></div>
        <h1 className="center">Signup</h1>
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
          <div className="input-field">
            <label htmlFor="password_confirmation">Password Confirmation: </label>
            <input type="password"
                   name="password_confirmation"
                   id="password_confirmation"
                   value={ this.state.password_confirmation }
                   onChange={ this.handleChange } />
          </div>
          <input type="submit" value="Create Account" className="btn" />
        </form>
      </div>
    )
  }
}

export default connect(null, { signup })(Signup);
