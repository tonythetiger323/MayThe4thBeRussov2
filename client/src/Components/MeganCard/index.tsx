import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Image, Transformation } from 'cloudinary-react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Responsive from 'react-responsive'

const Mobile = (props: any) => <Responsive {...props} maxWidth={667} />
const Default = (props: any) => <Responsive {...props} minWidth={668}/>

const styles: any = {
  card: {
    width: 800,
    height: 350,
    display: 'flex',
    flexDirection: 'row'
  },
  cardMobile: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  }
  
}


const MeganCard = (props: any): React.FunctionComponentElement<any> => {
  const { classes } = props;
  return(
    <div>
      <Default>
        <Card className={classes.card}>
          <CardMedia>
            <Image cloudName='tonythetiger323' publicId='MayThe4thBeRusso/Her Story Page/IMG_2040.jpg'>
              <Transformation aspectRatio='1:1' gravity='auto' width='375' crop='fill' />
            </Image>
          </CardMedia>
          <div>
          <CardContent className={classes.content}>
            <Grid container direction='column'>
              <Typography variant='body1'>Megan was born and raised in San Jose California. Randy was born and raised in Plymouth  Michigan, transplanted to Chicago, and finally wound up in  San Jose California for a new job opportunity. If not for   technology they may never have found one another, but as it turns out, luck was on their side.

              Their love story began through a tiny little message from Randy,“Hey! You seem super great. I love how you describe yourself and what you have to say. Also, is that a maple bacon donut? I’d love to get to know you if you are interested :&#41;” Back in January 2017. To which Megan replied “Hey! You seem great too! That was actually a chocolate donut with bacon on top. I added the bacon myself :&#41; Yeah, I’d like to get to know you too!” 
              </Typography>
            </Grid>
          </CardContent>
        </div>
      </Card>
    </Default>

    <Mobile>
      <Card className={classes.cardMobile}>
        <CardMedia>
          <Image cloudName='tonythetiger323' publicId='MayThe4thBeRusso/Her Story Page/IMG_2040.jpg'>
            <Transformation aspectRatio='1:1' gravity='auto' width='375' crop='fill' />
          </Image>
        </CardMedia>
        <CardContent>
          <Typography variant='body1' style={{ fontFamily: 'Oswald' }}>Megan was born and raised in San Jose California. Randy was born and raised in Plymouth  Michigan, transplanted to Chicago, and finally wound up in  San Jose California for a new job opportunity. If not for   technology they may never have found one another, but as it turns out, luck was on their side.

          Their love story began through a tiny little message from Randy,“Hey! You seem super great. I love how you describe yourself and what you have to say. Also, is that a maple bacon donut? I’d love to get to know you if you are interested :&#41;” Back in January 2017. To which Megan replied “Hey! You seem great too! That was actually a chocolate donut with bacon on top. I added the bacon myself :&#41; Yeah, I’d like to get to know you too!” 
          </Typography>
        </CardContent>
      </Card>
    </Mobile>
  </div>
  )
}

export default withStyles(styles)(MeganCard)