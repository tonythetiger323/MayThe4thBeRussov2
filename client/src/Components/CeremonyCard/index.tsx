require('dotenv').config()
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Map from '../Map'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Responsive from 'react-responsive'

const Mobile = (props: any) => <Responsive {...props} maxWidth={667} />
const Default = (props: any) => <Responsive {...props} minWidth={668}/>

const styles = {
  card: {
    width: '65%'
  },
  cardMobile: {
    width: '100%'
  },
  media: {
    height: 352
  },
  cardContent: {
    alignText: 'center'
  }
};

const CeremonyCard = (props: any) => {
  const { classes } = props;
  return (
    <div>
      <Default>
        <Card className={classes.card}>
          <CardMedia
          className={classes.media}
          image='https://res.cloudinary.com/tonythetiger323/image/upload/v1555122501/MayThe4thBeRusso/Ceremony%20Page/waima%CC%83nalo_beach_park_HDR.jpg'
          title='Waimãnalo Beach Park'
          />
          <div style={{height: 352, width: '100%'}}>
          <Map center={{lat: 21.33, lng: -157.70}} zoom={11} lat={21.336780} lng={-157.701000} text={'🔘 Waimãnalo Beach Park'}
          />
          </div>
          <CardContent className={classes.cardContent}>
            <Typography variant='h3' align='center' style={{ fontFamily: 'Oswald' }}>Ceremony</Typography>
            <Typography variant='h3' align='center' style={{ fontFamily: 'Oswald' }}>May 4th, 2019</Typography>
            <Typography variant='h4' align='center' style={{ fontFamily: 'Oswald' }}>Waimãnalo Beach Park</Typography>
            <Typography variant='h5' align='center' style={{ fontFamily: 'Oswald' }}>9:00am HST</Typography>
            <Typography variant='body1' align='center' style={{ fontFamily: 'Oswald' }}>Check back on the day of the big event for a link to watch a live stream.</Typography>
          </CardContent>
        </Card>
      </Default>

      <Mobile>
        <Card className={classes.cardMobile}>
          <CardMedia
          className={classes.media}
          image='https://res.cloudinary.com/tonythetiger323/image/upload/v1555122501/MayThe4thBeRusso/Ceremony%20Page/waima%CC%83nalo_beach_park_HDR.jpg'
          title='Waimãnalo Beach Park'
          />
          <div style={{height: 352, width: '100%'}}>
          <Map center={{lat: 21.33, lng: -157.70}} zoom={11} lat={21.336780} lng={-157.701000} text={'🔘 Waimãnalo Beach Park'}
          />
          </div>
          <CardContent className={classes.cardContent}>
            <Typography variant='h3' align='center' style={{ fontFamily: 'Oswald' }}>Ceremony</Typography>
            <Typography variant='h3' align='center' style={{ fontFamily: 'Oswald' }}>May 4th, 2019</Typography>
            <Typography variant='h4' align='center' style={{ fontFamily: 'Oswald' }}>Waimãnalo Beach Park</Typography>
            <Typography variant='h5' align='center' style={{ fontFamily: 'Oswald' }}>9:00am HST</Typography>
            <Typography variant='body1' align='center' style={{ fontFamily: 'Oswald' }}>Check back on the day of the big event for a link to watch a live stream.</Typography>
          </CardContent>
        </Card>
      </Mobile>
    </div>
  );
};

export default withStyles(styles)(CeremonyCard);
