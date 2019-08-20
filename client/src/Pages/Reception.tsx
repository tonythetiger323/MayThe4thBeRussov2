import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import ReceptionCard from '../Components/ReceptionCard'

class Reception extends React.Component {
  render() {
    return (
      <div>
        <Grid container direction='column' alignItems='center'>
          <ReceptionCard />
        </Grid>
      </div>
    )
  }
}

export default Reception
