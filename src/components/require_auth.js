import React, { Component } from 'react';
import { connect } from 'react-redux';

const withAuth = ComposedComponent => {
  class Authentication extends Component {
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  const mapStateToProps = state => ({
    authenticated: state.authenticated
  })

  return connect(mapStateToProps)(Authentication)
}

export default withAuth;
