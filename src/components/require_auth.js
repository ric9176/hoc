import React, { Component } from 'react';

const withAuth = ComposedComponent => {
  return class Authentication extends Component {
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
}

export default withAuth;
