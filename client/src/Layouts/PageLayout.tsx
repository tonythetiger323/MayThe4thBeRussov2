import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import AuthLinkList from '../Components/AuthLinkList'
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
            <Grid item xs={12}>
              <Navbar />
            </Grid>
          </Grid>
          <Grid container spacing={8}>
            <Grid item xs={1}>
              <AuthLinkList/>
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
