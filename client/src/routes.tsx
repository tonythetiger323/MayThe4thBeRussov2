import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import AppliedRoute from './Components/AppliedRoute'
import PageLayout from './Layouts/PageLayout'
import Index from './Pages/Index'
import NotFound from './Pages/NotFound'
import UnderConstruction from './Pages/UnderConstruction'
import Rsvp from './Pages/Rsvp'

// component that will handle HTML routing
export default () => {
  return (
    <PageLayout>
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
        <AppliedRoute exact path='/rsvp' component={Rsvp} />
        <Route component={NotFound} />
      </Switch>
    </PageLayout>
  )
}
