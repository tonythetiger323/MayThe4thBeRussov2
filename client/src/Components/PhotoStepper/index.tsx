import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles, Theme } from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

const AutoPlaySwipeableViews: any = autoPlay(SwipeableViews)

interface PhotoStepInterface {
  label: string
  imgPath: string
}
// Photos for stepper set as an array of obejects
const photoSteps: PhotoStepInterface[] = [
  {
    label: 'Color, wide-angle, with large tree',
    imgPath:
      'https://res.cloudinary.com/tonythetiger323/image/upload/v1550345725/MayThe4thBeRusso/Index%20Page%20Stepper%20Photos/IMG_0003.jpg'
  },
  {
    label: 'Color, wide-angle, between trees',
    imgPath:
      'https://res.cloudinary.com/tonythetiger323/image/upload/v1550345725/MayThe4thBeRusso/Index%20Page%20Stepper%20Photos/IMG_0002.jpg'
  },
  {
    label: 'Color, fence, ocean',
    imgPath:
      'https://res.cloudinary.com/tonythetiger323/image/upload/v1550345725/MayThe4thBeRusso/Index%20Page%20Stepper%20Photos/IMG_0001.jpg'
  },
  {
    label: 'B&W, walking beach',
    imgPath:
      'https://res.cloudinary.com/tonythetiger323/image/upload/v1550345725/MayThe4thBeRusso/Index%20Page%20Stepper%20Photos/IMG_0005.jpg'
  },
  {
    label: 'Color, standing on tree',
    imgPath:
      'https://res.cloudinary.com/tonythetiger323/image/upload/ar_16:9,c_fill,g_auto,e_sharpen/v1550345725/MayThe4thBeRusso/Index%20Page%20Stepper%20Photos/IMG_0004.jpg'
  }
]

const styles: any = (theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row'
  },
  img: {
    borderRadius: '25px',
    maxHeight: 500,
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 300ms linear'
  }
})

interface PhotoStepperState {
  activeStep: number
}

export class PhotoStepper extends React.Component<any, PhotoStepperState> {
  readonly state: PhotoStepperState = {
    activeStep: 0
  }

  handleStepChange = (activeStep: number) => {
    this.setState({ activeStep })
  }

  render() {
    const { classes, theme } = this.props
    const { activeStep } = this.state

    return (
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
          <div className={classes.root}>
            <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={this.handleStepChange}
              enableMouseEvents
              interval={6000}
              direction={'incremental'}
            >
              {photoSteps.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <img
                      className={classes.img}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
          </div>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PhotoStepper)
