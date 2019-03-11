import * as React from 'react'
import Footer from '../../Footer/'
import Navbar from '../../Navbar'

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Footer />
      </div>
    )
  }
}
