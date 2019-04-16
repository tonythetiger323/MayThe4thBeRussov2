import React from 'react'
import MeganCard from '../Components/MeganCard'
import RandyCard from '../Components/RandyCard'
import { Image, Transformation } from 'cloudinary-react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Responsive from 'react-responsive'

const Mobile = (props: any) => <Responsive {...props} maxWidth={897} />
const Default = (props: any) => <Responsive {...props} minWidth={898}/>

const TheirStory = () => {
  return(
    <div>
      <Grid container direction='column' alignItems='center'>
        <br/>
        <MeganCard/>
        <br/>
        <RandyCard/>
        <br/>
        <Default>
          <Grid container alignItems='center' direction='column'>
            <Grid item>
              <Image cloudName='tonythetiger323' publicId='MayThe4thBeRusso/Their Story Page/IMG_0006.jpg' >
                <Transformation height='500' crop='scale' />
              </Image>
            </Grid>
            <Grid item>
              <Card>
                <CardContent>
                  <Typography variant='body1' align='center' style={{ fontFamily: 'Oswald' }}>If you didn't already guess it, Megan said yes. Megan and Randy will be getting married on May 4th, 2019 in Hawaii. They are so excited to tie the knot and start the next chapter of their life together. 
                  </Typography>
                  <Typography variant='body1' align='center' style={{ fontFamily: 'Oswald' }}>
                  Thank you for visiting our site.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Default>

        <Mobile>
          <Image cloudName='tonythetiger323' publicId='MayThe4thBeRusso/Their Story Page/IMG_0006.jpg' >
            <Transformation height='460' crop='scale' />
          </Image>
          <Card>
            <CardContent>
              <Typography variant='body1' align='center' style={{ fontFamily: 'Oswald' }}>If you didn't already guess it, Megan said yes. Megan and Randy will be getting married on May 4th, 2019 in Hawaii. They are so excited to tie the knot and start the next chapter of their life together. 
              </Typography>
              <Typography variant='body1' align='center' style={{ fontFamily: 'Oswald' }}>
              Thank you for visiting our site.
              </Typography>
            </CardContent>
          </Card>
        </Mobile>
      </Grid>
    </div>
  )
}

export default TheirStory