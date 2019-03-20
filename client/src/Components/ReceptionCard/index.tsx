import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    maxWidth: 650,
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
      <CardContent>
        <Typography variant='h3'>Reception</Typography>
        <Typography variant='h3'>June 1st, 2019</Typography>
        <Typography variant='h4'>Sanborn County Park</Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(ReceptionCard);
