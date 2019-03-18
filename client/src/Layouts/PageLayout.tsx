import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

class PageLayout extends React.Component {
  render() {
    return (
      <div className='app-container'>
        <header>
          <Typography variant='h3' align='center'>May The 4th Be Russo</Typography>
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
