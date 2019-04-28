import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom';

const ProtectedRoute = ({ users, component: C, ...rest }: any) => (
  <Route { ...rest } render={props => (
    users.length > 0 ? (
      <C {...props} />
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}
      />
    )
  )}
  />
)

const mapStateToProps = (state: any, ownProps?: any) => ({ users: state.users });
export default withRouter(connect(mapStateToProps)(ProtectedRoute))