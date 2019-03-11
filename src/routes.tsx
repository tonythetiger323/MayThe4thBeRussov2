import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import AppliedRoute from './components/AppliedRoute'
import Index from './components/Pages/Index'
import UnderConstruction from './components/Pages/UnderConstruction'
import NotFound from './components/Pages/NotFound'

// component that will handle HTML routing
export default ({ childProps }: any) => {
  return (
    <Switch>
      <AppliedRoute exact path='/' component={Index} props={childProps} />
      <AppliedRoute
        exact
        path='/theirstory'
        component={UnderConstruction}
        props={childProps}
      />
      <AppliedRoute
        exact
        path='/herstory'
        component={UnderConstruction}
        props={childProps}
      />
      <AppliedRoute
        exact
        path='/hisstory'
        component={UnderConstruction}
        props={childProps}
      />
      <AppliedRoute
        exact
        path='/ceremony'
        component={UnderConstruction}
        props={childProps}
      />
      <AppliedRoute
        exact
        path='/reception'
        component={UnderConstruction}
        props={childProps}
      />
      <AppliedRoute
        exact
        path='/registry'
        component={UnderConstruction}
        props={childProps}
      />
      <AppliedRoute
        exact
        path='/guestbook'
        component={UnderConstruction}
        props={childProps}
      />
      <AppliedRoute exact path='/contactus' component={UnderConstruction} />
      <Route component={NotFound} />
    </Switch>
  )
}
