import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import NavbarLink from '../Components/NavbarLink'
import { Parallax } from 'react-parallax'

class PageLayout extends React.Component {
  render() {
    return (
      <div className='app-container'>
        <Parallax
          blur={3}
          bgImage={require('./images/MayThe4thBeRusso_Background Image_sean-o-406693-unsplash.jpg')}
          bgImageAlt={'Hawaiian Beach'}
          strength={100}
        >
        <header>
          <Typography variant='h3' align='center'>
            Megan &amp; Randy
          </Typography>
          <Typography variant='h5' align='center'>May 14th 2019</Typography>
        </header>
        <nav>
          <Grid container alignItems='center' justify='space-around'>
            <Grid item>
              <NavbarLink to='/'>
                <h1>Megan &amp; Randy</h1>
              </NavbarLink>
            </Grid>
            <Grid item>
              <Navbar />
            </Grid>
          </Grid>
        </nav>
        <main>{this.props.children}</main>
        <footer>
          <Footer />
        </footer>
        </Parallax>
      </div>
    )
  }
}
export default PageLayout
