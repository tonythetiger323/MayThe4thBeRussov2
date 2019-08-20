import * as React from 'react'
import CeremonyCard from '../Components/CeremonyCard'
import Grid from '@material-ui/core/Grid'

class Ceremony extends React.Component {
  render() {
    return (
      <div>
        <Grid container direction='column' alignContent='center'>
          <CeremonyCard />
        </Grid>
      </div>
    )
  }
}

export default Ceremony
