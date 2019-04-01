import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import AuthNavBar from '../Components/AuthNavBar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

class PageLayout extends React.Component {
  render() {
    return (
      <div className='app-container'>
        <header>
          <Typography variant='h3' align='center'>
            May The 4th Be Russo
          </Typography>
        </header>
        <nav>
          <Grid container>
            <Grid item xs={9}>
              <Navbar />
            </Grid>
            <Grid item xs={3}>
              <AuthNavBar/>
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
