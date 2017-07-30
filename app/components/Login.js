import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired
  };

  _inputRef: null;

  handleLogin = () => {
    this.props.onLogin({
      username: this._inputRef.value,
      loggedIn: true
    });
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <input ref={(ref) => { this._inputRef = ref; }} type="text" />
        <button onClick={this.handleLogin}>Log In</button>
      </div>
    );
  }
}
