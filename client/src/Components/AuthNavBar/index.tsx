import * as React from 'react'
import RegisterDialog from '../RegisterDialog'
import LoginDialog from '../LoginDialog'
  
class AuthNavBar extends React.Component {
  render() {
    return (
      <div>
          <RegisterDialog userHasAuthenticated />
          <LoginDialog userHasAuthenticated />
      </div>
       );
  }
}
export default AuthNavBar;
