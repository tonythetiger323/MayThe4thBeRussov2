import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import NavbarLink from '../NavbarLink'
import NavbarLinkMenu from '../NavbarLinkMenu'

const Navbar = () => {
  return (
    <Grid item container alignItems='center'>
      <Grid item>
        <NavbarLinkMenu>Their Story</NavbarLinkMenu>
        <NavbarLink to='/ceremony'>Ceremony</NavbarLink>
        <NavbarLink to='/reception'>Reception</NavbarLink>
        <NavbarLink to='/rsvp'>RSVP</NavbarLink>
        <NavbarLink to='/registry'>Registry</NavbarLink>
        <NavbarLink to='/guestbook'>Guestbook</NavbarLink>
        <NavbarLink to='/contactus'>Contact Us</NavbarLink>
      </Grid>
    </Grid>
  )
}
export default Navbar
