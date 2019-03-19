import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const backgroundUrl =
  'https://res.cloudinary.com/tonythetiger323/image/upload/e_blur:1196/v1550544815/MayThe4thBeRusso/Background Image/sean-o-406693-unsplash.jpg'
const PageLayoutStyle = {
  backgroundImage: `url(${backgroundUrl})`,
  backgroundSize: 'cover',
  overflow: 'hidden'
}
class PageLayout extends React.Component {
  render() {
    return (
      <div className='app-container' style={PageLayoutStyle}>
        <header>
          <Typography variant='h3' align='center'>
            May The 4th Be Russo
          </Typography>
        </header>
        <nav>
          <Navbar />
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
