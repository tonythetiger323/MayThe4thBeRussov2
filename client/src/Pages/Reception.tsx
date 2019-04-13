import * as React from 'react'
import Countdown from '../Components/Countdown'
import Grid from '@material-ui/core/Grid'
import ReceptionCard from '../Components/ReceptionCard'

class Reception extends React.Component {
  render() {
    return (
      <div>
        <Countdown date={'Jun 1, 2019 18:00:00 GMT-7:00'} />
        <br/>
        <Grid container direction='column' alignContent='center'>
        <ReceptionCard />
        </Grid>
      </div>
    )
  }
}

export default Reception
