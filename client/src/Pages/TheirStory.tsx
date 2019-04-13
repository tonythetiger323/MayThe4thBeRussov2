import React from 'react'
import MeganCard from '../Components/MeganCard'
import RandyCard from '../Components/RandyCard'
import { Image, Transformation } from 'cloudinary-react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const TheirStory = () => {
  return(
    <div>
      <Grid container direction='column' alignItems='center'>
        <br/>
        <MeganCard/>
        <br/>
        <RandyCard/>
        <br/>
        <Grid container alignItems='center' direction='column'>
          <Grid item>
            <Image cloudName='tonythetiger323' publicId='MayThe4thBeRusso/Their Story Page/IMG_0006.jpg' >
              <Transformation height='500' crop='scale' />
            </Image>
          </Grid>
          <Grid item>
            <Card>
              <CardContent>
                <Typography variant='body1' align='center'>If you didn't already guess it, Megan said yes. Megan and Randy will be getting married on May 4th, 2019 in Hawaii. They are so excited to tie the knot and start the next chapter of their life together. 
                </Typography>
                <Typography variant='body1' align='center'>
                Thank you for visiting our site.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default TheirStory