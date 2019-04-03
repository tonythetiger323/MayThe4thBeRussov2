import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import AuthNavBar from '../Components/AuthNavBar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import NavbarLink from '../Components/NavbarLink'

class PageLayout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Typography variant="h3" align="center">
            May The 4th Be Russo
          </Typography>
        </header>
        <nav>
          <Grid container alignItems="center" justify="space-around">
            <Grid item>
              <NavbarLink to="/">
                <h1>Megan &amp; Randy</h1>
              </NavbarLink>
            </Grid>
            <Grid item>
              <Navbar />
            </Grid>
            <Grid item>
              <AuthNavBar />
            </Grid>
          </Grid>
        </nav>
        <main>{this.props.children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}
export default PageLayout
