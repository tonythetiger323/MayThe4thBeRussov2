import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import AppliedRoute from './Components/AppliedRoute'
import PageLayout from './Layouts/PageLayout'
import Index from './Pages/Index'
import NotFound from './Pages/NotFound'
import Ceremony from './Pages/Ceremony'
import Reception from './Pages/Reception'
import Guestbook from './Pages/Guestbook'
import Registry from './Pages/Registry'
import ContactUs from './Pages/ContactUs'
import TheirStory from './Pages/TheirStory'
import HerStory from './Pages/HerStory'
import HisStory from './Pages/HisStory'

// component that will handle HTML routing
export default () => {
  return (
    <PageLayout>
      <Switch>
        <AppliedRoute exact path='/' component={Index} />
        <AppliedRoute exact path='/theirstory' component={TheirStory} />
        <AppliedRoute exact path='/herstory' component={HerStory} />
        <AppliedRoute exact path='/hisstory' component={HisStory} />
        <AppliedRoute exact path='/ceremony' component={Ceremony} />
        <AppliedRoute exact path='/reception' component={Reception} />
        <AppliedRoute exact path='/registry' component={Registry} />
        <AppliedRoute exact path='/guestbook' component={Guestbook} />
        <AppliedRoute exact path='/contactus' component={ContactUs} />
        <Route component={NotFound} />
      </Switch>
    </PageLayout>
  )
}
