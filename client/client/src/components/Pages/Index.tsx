import * as React from 'react'
import Page from '../Layouts/Page'
import Typography from '@material-ui/core/Typography'
import { withStyles, Theme } from '@material-ui/core/styles'

const styles = (theme: Theme) => ({
  stepper: {
    height: '50px',
    width: '300px',
    opacity: 0.0
  }
})

class Index extends React.Component {
  render() {
    const style = {
      fontFamily: 'Arvo'
    }
    return (
      <div>
        <Page>
          <Typography style={style} variant='h2'>
            May the 4th be Russo
          </Typography>
        </Page>
      </div>
    )
  }
}

export default withStyles(styles)(Index)
