import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Map from '../Map'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import NavbarLink from '../NavbarLink'
import Responsive from 'react-responsive'

const Mobile = (props: any) => <Responsive {...props} maxWidth={667} />
const Default = (props: any) => <Responsive {...props} minWidth={668} />

const styles = {
  card: {
    width: '100%'
  },
  cardMobile: {
    width: '100%'
  },
  media: {
    width: 900,
    height: 450
  },
  mediaMobile: {
    width: '100%',
    height: 200
  },
  cardContent: {
    alignText: 'center'
  }
}

const ReceptionCard = (props: any) => {
  const { classes } = props
  return (
    <div>
      <Default>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="https://res.cloudinary.com/tonythetiger323/image/upload/v1555403575/MayThe4thBeRusso/Reception Page/Sanborn2.jpg"
            title="Sanborn Country Park"
          />
          <div style={{ height: 450, width: '100%' }}>
            <Map
              center={{ lat: 37.23, lng: -122.06 }}
              zoom={11}
              lat={37.2354}
              lng={-122.0627}
              text={'Sanborn County Park'}
            />
          </div>
          <CardContent className={classes.cardContent}>
            <Typography
              variant="h3"
              align="center"
              style={{ fontFamily: 'Oswald' }}
            >
              Reception
            </Typography>
            <Typography
              variant="h3"
              align="center"
              style={{ fontFamily: 'Oswald' }}
            >
              June 1st, 2019
            </Typography>
            <Typography
              variant="h4"
              align="center"
              style={{ fontFamily: 'Oswald' }}
            >
              Sanborn County Park
            </Typography>
            <Typography
              variant="h5"
              align="center"
              style={{ fontFamily: 'Oswald' }}
            >
              12:00pm - 4:00pm PST
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ fontFamily: 'Oswald' }}
            >
              <p>Lunch:</p>
              <p>
                Many snacks will be provided. A taco truck will be catering and
                there will be a vegetarian option.
              </p>

              <p>Dessert:</p>
              <p>An ice cream truck will be catering dessert.</p>

              <p>Entertainment:</p>
              <p>
                Games and music will be available for fun. To RSVP click{' '}
                <NavbarLink to="/rsvp">here</NavbarLink>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </Default>

      <Mobile>
        <Card className={classes.cardMobile}>
          <CardMedia
            className={classes.mediaMobile}
            image="https://res.cloudinary.com/tonythetiger323/image/upload/c_scale,w_414/v1555122501/MayThe4thBeRusso/Ceremony%20Page/waima%CC%83nalo_beach_park_HDR.jpg"
            title="Sanborn Country Park"
          />
          <div style={{ height: 200, width: '100%' }}>
            <Map
              center={{ lat: 37.23, lng: -122.06 }}
              zoom={11}
              lat={37.2354}
              lng={-122.0627}
              text={'🔘 Sanborn County Park'}
            />
          </div>
          <CardContent>
            <Typography
              variant="h3"
              align="center"
              style={{ fontFamily: 'Oswald' }}
            >
              Reception
            </Typography>
            <Typography
              variant="h3"
              align="center"
              style={{ fontFamily: 'Oswald' }}
            >
              June 1st, 2019
            </Typography>
            <Typography
              variant="h4"
              align="center"
              style={{ fontFamily: 'Oswald' }}
            >
              Sanborn County Park
            </Typography>
            <Typography
              variant="h5"
              align="center"
              style={{ fontFamily: 'Oswald' }}
            >
              12:00pm - 4:00pm PST
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ fontFamily: 'Oswald' }}
            >
              <p>Lunch:</p>
              <p>
                Many snacks will be provided. A taco truck will be catering and
                there will be a vegetarian option.
              </p>

              <p>Dessert:</p>
              <p>An ice cream truck will be catering dessert.</p>

              <p>Entertainment:</p>
              <p>
                Games and music will be available for fun. To RSVP click{' '}
                <NavbarLink to="/rsvp">here</NavbarLink>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </Mobile>
    </div>
  )
}

export default withStyles(styles)(ReceptionCard)
