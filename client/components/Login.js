import React from 'react';

export default class App extends React.Component {
  handleLogin() {
    const { onLogin } = this.props;
    const username = this.refs.username.value;

    onLogin({ username, loggedIn: true });
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <input ref="username" type="text" />
        <button onClick={::this.handleLogin}>Log In</button>
      </div>
    );
  }
}
