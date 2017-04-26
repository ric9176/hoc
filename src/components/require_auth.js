import React, { Component } from 'react';
import { connect } from 'react-redux';

const withAuth = ComposedComponent => {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object.isRequired
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/')
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/')
      }
    }

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
