import * as React from 'react'
import RegisterDialog from '../RegisterDialog'
import LoginDialog from '../LoginDialog'
import { Grid } from '@material-ui/core'

class AuthNavBar extends React.Component {
  render() {
    return (
      <Grid item container>
        <Grid item>
          <RegisterDialog userHasAuthenticated />
        </Grid>
        <Grid item>
          <LoginDialog userHasAuthenticated />
        </Grid>
      </Grid>
    )
  }
}
export default AuthNavBar
