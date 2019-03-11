import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import AppliedRoute from './components/AppliedRoute'
import Index from './components/Pages/Index'
import UnderConstruction from './components/Pages/UnderConstruction'
import NotFound from './components/Pages/NotFound'

// component that will handle HTML routing
export default () => {
  return (
    <Switch>
      <AppliedRoute exact path='/' component={Index} />
      <AppliedRoute exact path='/theirstory' component={UnderConstruction} />
      <AppliedRoute exact path='/herstory' component={UnderConstruction} />
      <AppliedRoute exact path='/hisstory' component={UnderConstruction} />
      <AppliedRoute exact path='/ceremony' component={UnderConstruction} />
      <AppliedRoute exact path='/reception' component={UnderConstruction} />
      <AppliedRoute exact path='/registry' component={UnderConstruction} />
      <AppliedRoute exact path='/guestbook' component={UnderConstruction} />
      <AppliedRoute exact path='/contactus' component={UnderConstruction} />
      <Route component={NotFound} />
    </Switch>
  )
}
