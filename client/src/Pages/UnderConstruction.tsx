import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    maxWidth: 650,
  },
  media: {
    height: 352,
  },
};

const UnderConstruction = (props: any): JSX.Element => {
  const { classes } = props;
  return (
  <div>
    <Grid container direction='column' alignContent='center' alignItems='center' justify='center'>
      <Typography variant='h1'>Under Construction</Typography>
      <Card className={classes.card}>
        <CardMedia className={classes.media}
        image='https://res.cloudinary.com/tonythetiger323/image/upload/v1551236759/MayThe4thBeRusso/Other%20Photos/Together/FullSizeRender.jpg'
        title='Megan and Randy'
        />
        <CardContent>
          <Typography variant='h3'>This page is currenlty under construction, please check back soon!</Typography>
        </CardContent>
      </Card>
    </Grid>
  </div>
  )

}

export default withStyles(styles)(UnderConstruction)
