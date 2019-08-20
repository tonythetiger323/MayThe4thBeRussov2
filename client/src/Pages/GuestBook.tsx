import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Image, Transformation } from 'cloudinary-react'
import Paper from '@material-ui/core/Paper'
import MessageDialog from '../Components/MessageDialog'
import { withStyles, Theme } from '@material-ui/core/styles'
import GuestbookMessages from '../Components/GuestBookMessages'
import Responsive from 'react-responsive'

const Mobile = (props: any) => <Responsive {...props} maxWidth={667} />
const Default = (props: any) => <Responsive {...props} minWidth={668} />

const styles = (theme: Theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
})

function GuestBook(props: any) {
  const { classes } = props

  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
        alignContent="center"
        justify="center"
      >
        <Grid item>
          <Typography variant="h4" align="center">
            Guest Book
          </Typography>
        </Grid>
        <br />
        <Grid item>
          <Default>
            <Image
              cloudName="tonythetiger323"
              publicId="MayThe4thBeRusso/Other Photos/Together/FullSizeRender.jpg"
            >
              <Transformation width="550" crop="scale" />
            </Image>
          </Default>
          <Mobile>
            <Image
              cloudName="tonythetiger323"
              publicId="MayThe4thBeRusso/Other Photos/Together/FullSizeRender.jpg"
            >
              <Transformation width="375" crop="scale" />
            </Image>
          </Mobile>
        </Grid>
        <br />
        <Paper style={{ opacity: 0.6 }} className={classes.root}>
          <Grid
            container
            direction="column"
            alignItems="center"
            alignContent="center"
            justify="center"
          >
            <Grid item>
              <Typography
                style={{ fontFamily: 'Oswald' }}
                variant="h6"
                align="center"
              >
                Help us remember this very special time in our lives by leaving
                us a note! Thank you so much for celebrating with us!
              </Typography>
            </Grid>
            <br />
            <Grid item>
              <MessageDialog />
            </Grid>
          </Grid>
        </Paper>
        <br />
        <Grid item>
          <Typography
            variant="h4"
            style={{ fontFamily: 'Oswald' }}
            align="center"
          >
            Guest Book Messages
          </Typography>
        </Grid>
        <br />
        <Grid item>
          <GuestbookMessages />
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(GuestBook)
