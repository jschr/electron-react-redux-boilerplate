import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>Hi!</div>
    );
  }
}

export default connect((state) => state)(App);
