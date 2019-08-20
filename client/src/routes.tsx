import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import AppliedRoute from './Components/AppliedRoute'
import PageLayout from './Layouts/PageLayout'
import Index from './Pages/Index'
import TheirStory from './Pages/TheirStory'
import NotFound from './Pages/NotFound'
import Ceremony from './Pages/Ceremony'
import Reception from './Pages/Reception'
import Rsvp from './Pages/Rsvp'
import Registry from './Pages/Registry'
import GuestBook from './Pages/GuestBook'
import Login from './Pages/Login'
import RsvpDashboard from './Pages/RsvpDashboard'
import reqAuth from './Components/Auth'

// component that will handle HTML routing
export default () => {
  return (
    <PageLayout>
      <Switch>
        <AppliedRoute exact path='/' component={Index} />
        <AppliedRoute exact path='/theirstory' component={TheirStory} />
        <AppliedRoute exact path='/ceremony' component={Ceremony} />
        <AppliedRoute exact path='/reception' component={Reception} />
        <AppliedRoute exact path='/registry' component={Registry} />
        <AppliedRoute exact path='/guestbook' component={GuestBook} />
        <AppliedRoute exact path='/rsvp' component={Rsvp} />
        <AppliedRoute exact path='/login' component={Login} />
        <Route exact path='/RsvpDashboard' component={reqAuth(RsvpDashboard)} />
        <Route component={NotFound} />
      </Switch>
    </PageLayout>
  )
}
