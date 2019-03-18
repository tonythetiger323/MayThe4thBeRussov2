import * as React from 'react'
import Countdown from '../Components/Countdown'
import ReceptionCard from '../Components/ReceptionCard'

class Reception extends React.Component {
  render() {
    return (
      <div>
        <Countdown date={'Jun 1, 2019 18:00:00'} />
        <ReceptionCard />
      </div>
    )
  }
}

export default Reception
