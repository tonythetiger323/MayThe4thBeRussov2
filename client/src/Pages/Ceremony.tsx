import * as React from 'react'
import Countdown from '../Components/Countdown'
import CeremonyCard from '../Components/CeremonyCard'

class Ceremony extends React.Component {
  render() {
    return (
      <div>
        <Countdown date={'May 4, 2019 09:00:00'} />
        <CeremonyCard />
      </div>
    )
  }
}

export default Ceremony
