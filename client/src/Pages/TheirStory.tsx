import * as React from 'react'
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

class TheirStory extends React.Component {
  render() {
    return (
      <div>
        <Typography align='center' variant='h2'>
          Their Story
        </Typography>
        <Grid container direction='row'>
          <Grid item xs={3}>
            <CloudinaryContext cloudName={process.env.REACT_APP_CLOUD_NAME}>
              <Image publicId='MayThe4thBeRusso/Their Story Page/IMG_0006.jpg'>
                <Transformation quality='100' width='400' crop='scale' />
              </Image>
            </CloudinaryContext>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={8}>
            <Paper>
              Ex aliquip veniam sit id dolore exercitation nisi. Cupidatat sit
              eu labore quis. Laborum duis sit ea id duis. Nisi officia esse
              deserunt labore fugiat labore do deserunt. Lorem ex laboris magna
              deserunt eiusmod ullamco sint eiusmod eiusmod. Consectetur
              cupidatat do nisi mollit elit eu consectetur do tempor. Irure
              labore do eu excepteur ullamco veniam tempor esse sit sint aute
              cupidatat ipsum. Anim et mollit adipisicing quis. Fugiat nostrud
              veniam nisi amet excepteur sit aute enim. Aute enim pariatur
              consequat ea. Tempor quis esse in velit consectetur amet aliquip.
              Voluptate ea anim fugiat cupidatat ipsum laboris fugiat laborum
              velit cupidatat qui qui do. Duis proident aliquip do commodo velit
              commodo ut duis sunt deserunt. Tempor aliquip duis laborum
              consequat et ullamco dolor dolore qui incididunt. Ullamco elit
              commodo quis est. Voluptate laborum do ut nostrud irure ex nostrud
              dolore.
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default TheirStory;
