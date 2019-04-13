import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Image, Transformation } from 'cloudinary-react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

const styles: any = {
  card: {
    width: 925,
    height: 350,
    display: 'flex',
    flexDirection: 'row'
  },
  content: {
    flex: 'auto 0 1'
  }
  
}

const RandyCard = (props: any): React.FunctionComponentElement<any> => {
  const { classes } = props;
  return(
    <Card className={classes.card}>
      <div>
        <CardContent className={classes.content}>
          <Grid container direction='column'>
            <Typography variant='body1'>
              Both as unique as the other, they didn't want to find someone in the traditional way. From the very first message that was sent they knew they would be together forever. I mean, who doesn’t love bacon and donuts?

              Date after date they never got sick of each other. They both had a quirkiness about them that they both understood, food was a passion for both of them, and they both loved everything Disney related. 

              Randy knew that Disney had to be a part of their engagement. In January of 2018 Randy decided to invite a few close friends and immediate family to Disneyland to surprise Megan. After planning for many months the day arrived. When they arrived at Disneyland Megan was surprised to see everyone there. He pulled it off and she had no clue. In traditional Disney fashion, when you first get into the park you take a picture in front of the castle. Well, this picture turned into the proposal that neither would never forget.
            </Typography>
          </Grid>
        </CardContent>
      </div>
      <CardMedia>
        <Image cloudName='tonythetiger323' publicId='MayThe4thBeRusso/His Story Page/IMG_3334.jpg' >
          <Transformation aspectRatio='1:1' gravity='auto' width='350'    crop='fill'
          />
        </Image>
      </CardMedia>
    </Card>
  )
}

export default withStyles(styles)(RandyCard)