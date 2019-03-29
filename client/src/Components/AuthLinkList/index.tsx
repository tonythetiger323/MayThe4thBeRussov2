import * as React from 'react'
import List from '@material-ui/core/List'
import RegisterDialog from '../RegisterDialog'
import LoginDialog from '../LoginDialog'
import Grid from '@material-ui/core/Grid'

class AuthLinkList extends React.Component {
  render() {
    return (
      <List>
        <Grid container>
          <Grid item>
            <RegisterDialog userHasAuthenticated />
          </Grid>
          <Grid item>
            <LoginDialog userHasAuthenticated />
          </Grid>
        </Grid>
      </List>
    );
  }
}
export default AuthLinkList;
