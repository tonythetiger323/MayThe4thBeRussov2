import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import AppliedRoute from './Components/AppliedRoute'
import PageLayout from './Layouts/PageLayout'
import Index from './Pages/Index'
import NotFound from './Pages/NotFound'
import UnderConstruction from './Pages/UnderConstruction'
import Ceremony from './Pages/Ceremony'
import Reception from './Pages/Reception'
import Rsvp from './Pages/Rsvp'
import Registry from './Pages/Registry'
import Login from './Pages/Login'

// component that will handle HTML routing
export default () => {
  return (
    <PageLayout>
      <Switch>
        <AppliedRoute exact path='/' component={Index} />
        <AppliedRoute exact path='/theirstory' component={UnderConstruction} />
        <AppliedRoute exact path='/herstory' component={UnderConstruction} />
        <AppliedRoute exact path='/hisstory' component={UnderConstruction} />
        <AppliedRoute exact path='/ceremony' component={Ceremony} />
        <AppliedRoute exact path='/reception' component={Reception} />
        <AppliedRoute exact path='/registry' component={Registry} />
        <AppliedRoute exact path='/guestbook' component={UnderConstruction} />
        <AppliedRoute exact path='/rsvp' component={Rsvp} />
        <AppliedRoute exact path='/login' component={Login}/>
        <Route component={NotFound} />
      </Switch>
    </PageLayout>
  )
}
