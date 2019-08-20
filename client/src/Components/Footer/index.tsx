import * as React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import NavbarLink from '../NavbarLink'
import { connect } from 'react-redux'
import { logoutUser } from '../../redux/actions'
import history from '../../history'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontFamily: 'Oxygen',
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  })
)

interface FooterProps {
  isAuthenticated: boolean
  logoutUser: any
}

const Footer: React.FunctionComponent<FooterProps> = (props: FooterProps) => {
  const classes = useStyles()
  const { isAuthenticated, logoutUser } = props

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item>
          <span style={{ fontSize: 'small' }}>
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <Button
              style={{ fontSize: 'x-small' }}
              href="https://www.tonygreeley.com"
              component={Link as any}
            >
              Tony Greeley
            </Button>
            {!isAuthenticated && (
              <NavbarLink style={{ fontSize: 'x-small' }} to="/login">
                Login
              </NavbarLink>
            )}
            {isAuthenticated && (
              <div>
                <Button
                  style={{ fontSize: 'x-small' }}
                  onClick={logoutUser()
                    .then(localStorage.removeItem('access_token'))
                    .then(history.push('/index'))}
                >
                  Logout
                </Button>
                <NavbarLink style={{ fontSize: 'x-small' }} to="/rsvpdashboard">
                  Dashboard
                </NavbarLink>
              </div>
            )}
          </span>
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.isAuthenticated,
  user: state.user
})
export default connect(
  mapStateToProps,
  { logoutUser }
)(Footer)
