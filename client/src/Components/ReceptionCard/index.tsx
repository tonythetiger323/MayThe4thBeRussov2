require('dotenv').config()
import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Map from '../Map'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import NavbarLink from '../NavbarLink';

const styles = {
  card: {
    maxWidth: '65%',
  },
  media: {
    height: 352,
  },
};

const ReceptionCard = (props: any) => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image='https://res.cloudinary.com/tonythetiger323/image/upload/c_scale,w_625/v1550583106/MayThe4thBeRusso/Reception%20Page/690984.jpg'
        title='Sanborn Country Park'
      />
      <div style={{height: 352, width: '100%'}}>
        <Map APIKey={{key: process.env.REACT_APP_GOOGLE_API_KEY}} center={{lat: 37.23, lng: -122.06}} zoom={11} lat={37.2354} lng={-122.0627} text={'🔘 Sanborn County Park'}
        />
      </div>
      <CardContent>
        <Typography variant='h3' align='center'>Reception</Typography>
        <Typography variant='h3' align='center'>June 1st, 2019</Typography>
        <Typography variant='h4' align='center'>Sanborn County Park</Typography>
        <Typography variant='body1' align='center'>Lunch
Many snacks will be provided.
A taco truck will be catering and there will be a vegetarian option

Dessert
An ice cream truck will be catering dessert.

Entertainment
Games and music will be available for fun. To RSVP click <NavbarLink to='/rsvp'>here</NavbarLink>
</Typography>

      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(ReceptionCard);
