import React, { Component } from 'react'
import { connect } from 'react-redux'
import history from '../../history'

interface AuthProps {
  isAuthenticated: boolean
}
export default function(ComposedComponent: any) {
  class Auth extends Component<AuthProps, any> {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        history.push('/index')
      }
    }

    componentDidUpdate(nextProps: any) {
      if (!nextProps.isAuthenticated) {
        history.push('/index')
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = (state: any) => {
    return { isAuthenticated: state.isAuthenticated }
  }

  return connect(mapStateToProps)(Auth)
}
