import * as React from 'react'
import Page from '../Layouts/Page'
import Typography from '@material-ui/core/Typography'
import PhotoStepper from '../PhotoStepper'
import { withStyles, Theme } from '@material-ui/core/styles'

const styles = (theme: Theme) => ({
  stepper: {
    height: '50px',
    width: '300px',
    opacity: 0.0
  }
})

interface IndexProps {
  classes: {
    stepper: string
  }

  propTypes: any
}
class Index extends React.Component<IndexProps, any> {
  constructor(props: IndexProps) {
    super(props)
  }

  render() {
    const style = {
      fontFamily: 'Arvo'
    }
    const { classes } = this.props
    return (
      <div>
        <Page>
          <Typography style={style} variant='h2'>
            May the 4th be Russo
          </Typography>
          <PhotoStepper className={classes.stepper} />
        </Page>
      </div>
    )
  }
}

export default withStyles(styles)(Index)
