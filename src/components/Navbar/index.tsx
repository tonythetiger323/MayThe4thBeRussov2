import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import NavbarLink from '../NavbarLink'
import NavbarLinkMenu from '../NavbarLinkMenu'

const Navbar = () => {
  return (
    <Grid
      container
      direction='row'
      alignContent='space-between'
      justify='space-around'
      alignItems='center'
    >
      <Grid item xs={1} />
      <Grid item xs={3}>
        <NavbarLink to='/'>
          <h1>Megan &amp; Randy</h1>
        </NavbarLink>
      </Grid>
      <Grid item xs={8}>
        <NavbarLinkMenu>Their Story</NavbarLinkMenu>
        <NavbarLink to='/ceremony'>Ceremony</NavbarLink>
        <NavbarLink to='/reception'>Reception</NavbarLink>
        <NavbarLink to='/registry'>Registry</NavbarLink>
        <NavbarLink to='/guestbook'>Guestbook</NavbarLink>
        <NavbarLink to='/contactus'>Contact Us</NavbarLink>
      </Grid>
    </Grid>
  );
};
export default Navbar;
