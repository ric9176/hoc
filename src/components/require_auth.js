import React, { Component } from 'react';
import { connect } from 'react-redux';

const withAuth = ComposedComponent => {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object.isRequired
    }

    render() {
      console.log(this.context)
      return <ComposedComponent {...this.props} />;
    }
  }
  const mapStateToProps = state => ({
    authenticated: state.authenticated
  })

  return connect(mapStateToProps)(Authentication)
}

export default withAuth;
