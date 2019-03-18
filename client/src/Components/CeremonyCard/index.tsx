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

const CeremonyCard = (props: any) => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image='https://res.cloudinary.com/tonythetiger323/image/upload/c_scale,w_625/v1550574888/MayThe4thBeRusso/Ceremony%20Page/shot-on-dji-1235092-unsplash.jpg'
        title='Waimãnalo Beach Park'
      />
      <CardContent>
        <Typography variant='h3'>Ceremony</Typography>
        <Typography variant='h3'>May 4th, 2019</Typography>
        <Typography variant='h4'>Waimãnalo Beach Park</Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(CeremonyCard);
