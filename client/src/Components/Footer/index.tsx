import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import  Link  from '@material-ui/core/Link'
import  Button from '@material-ui/core/Button'
import NavbarLink from '../NavbarLink'

const styles = (theme: any) => ({
  root: {
    fontFamily: 'Oxygen',
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
})

interface FooterProps {
  classes: any
}

const Footer: React.FunctionComponent<FooterProps> = (props: FooterProps) => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Grid container justify='center'>
        <Grid item>
          <span style={{fontSize: 'small'}}>
              &copy; {new Date().getFullYear()} Copyright:{' '}
              <Button style={{fontSize: 'x-small'}} href='https://www.tonygreeley.com' component={Link as any}>Tony Greeley</Button>
              <NavbarLink style={{fontSize: 'x-small'}} to='/login'>Login</NavbarLink>
              <NavbarLink style={{fontSize: 'x-small'}} to='/rsvpdashboard'>Dashboard</NavbarLink>
          </span>
        </Grid>
      </Grid>
    </div>
  )
}
export default withStyles(styles)(Footer)
