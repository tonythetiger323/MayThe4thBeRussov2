import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import NavbarLink from '../NavbarLink'
import Responsive from 'react-responsive'

const Mobile = (props: any) => <Responsive {...props} maxWidth={667} />
const Default = (props: any) => <Responsive {...props} minWidth={668}/>

const Navbar = () => {
  return (
    <div>
      <Default>
        <Grid item container alignItems='center'>
          <Grid item>
            <NavbarLink to='/'>Home</NavbarLink>
            <NavbarLink to='/theirstory'>Their Story</NavbarLink>
            <NavbarLink to='/ceremony'>Ceremony</NavbarLink>
            <NavbarLink to='/reception'>Reception</NavbarLink>
            <NavbarLink to='/rsvp'>RSVP</NavbarLink>
            <NavbarLink to='/registry'>Registry</NavbarLink>
            <NavbarLink to='/guestbook'>Guest Book</NavbarLink>
          </Grid>
        </Grid>
      </Default>

      <Mobile>
        <Grid item container alignItems='center' justify='center'>
          <Grid item>
            <NavbarLink to='/'>Home</NavbarLink>
            <NavbarLink to='/theirstory'>Their Story</NavbarLink>
            <NavbarLink to='/ceremony'>Ceremony</NavbarLink>
            <NavbarLink to='/reception'>Reception</NavbarLink>
          </Grid>
          <Grid item>
            <NavbarLink to='/rsvp'>RSVP</NavbarLink>
            <NavbarLink to='/registry'>Registry</NavbarLink>
            <NavbarLink to='/guestbook'>Guest Book</NavbarLink>
          </Grid>
        </Grid>
      </Mobile>
    </div>
  )
}

export default Navbar
