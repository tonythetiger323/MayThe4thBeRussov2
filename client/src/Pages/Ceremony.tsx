import * as React from 'react'
import Countdown from '../Components/Countdown'
import CeremonyCard from '../Components/CeremonyCard'
import Grid from '@material-ui/core/Grid'

class Ceremony extends React.Component {
  render() {
    return (
      <div>
        <Countdown date={'May 4, 2019 09:00:00 GMT-10:00'} />
        <br/>
        <Grid container direction='column' alignContent='center'>
          <CeremonyCard />
        </Grid>
        </div>
    )
  }
}

export default Ceremony
