// Import dependencies
import * as React from 'react'
import { Route } from 'react-router-dom'

// Creating a route that will apply child props
const AppliedRoute = ({ component: C, props: cProps, ...rest }: any) => {
  return (
    <Route {...rest} render={(props: any) => <C {...props} {...cProps} />} />
  )
}
export default AppliedRoute
