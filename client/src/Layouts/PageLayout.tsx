import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Navbar from '../Components/Navbar'
import StyledFooter from '../Components/Footer'
import { Parallax } from 'react-parallax'

class PageLayout extends React.Component {
  render() {
    return (
      <div className='app-container'>
        <Parallax
          blur={1}
          bgImage={require('./images/MayThe4thBeRusso_Background Image_sean-o-406693-unsplash.jpg')}
          bgImageStyle={{ height: '100%', width: '100%' }}
          bgImageAlt={'Hawaiian Beach'}
          strength={100}
        >
          <header>
            <Typography variant='h3' align='center'>
              Megan &amp; Randy
            </Typography>
            <Typography variant='h5' align='center'>
              May 4th 2019
            </Typography>
          </header>
          <br />
          <nav>
            <Grid container alignItems='center' justify='space-around'>
              <Grid item>
                <Navbar />
              </Grid>
            </Grid>
          </nav>
          <main>{this.props.children}</main>
          <footer>
            <StyledFooter />
          </footer>
        </Parallax>
      </div>
    )
  }
}
export default PageLayout
