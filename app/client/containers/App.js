import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import userActions from '../actions/user';
import Login from '../components/Login';

@connect((state) => state)
export default class App extends React.Component {
  render() {
    const { user, dispatch } = this.props;
    const boundUserActions = bindActionCreators(userActions, dispatch);

    return (
      !user.loggedIn ?
        <Login onLogin={ boundUserActions.login } /> :
        <div>Hi { user.username }!</div>
    );
  }
}

