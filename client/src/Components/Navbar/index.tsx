import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import NavbarLink from '../NavbarLink'

const Navbar = () => {
  return (
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
  )
}
export default Navbar
