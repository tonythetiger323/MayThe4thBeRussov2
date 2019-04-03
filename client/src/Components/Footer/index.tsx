import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const styles = (theme: any) => ({
  root: {
    fontFamily: 'Oswald',
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
})

interface FooterProps {
  classes: any
}

const Footer: React.FunctionComponent<FooterProps> = (props: FooterProps) => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Grid container justify='center'>
        <Grid item>
          <Paper elevation={1}>
            <span>
              &copy; {new Date().getFullYear()} Copyright:{' '}
              <a href='https://www.tonygreeley.com'>Tony Greeley</a>
            </span>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
export default withStyles(styles)(Footer)
