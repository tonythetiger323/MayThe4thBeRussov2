import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const styles = (theme: any) => ({
  root: {
    fontFamily: 'BioRhyme',
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
      <Paper elevation={1}>
        <span>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a href='https://wwww.tonygreeley.com'>Tony Greeley</a>
        </span>
      </Paper>
    </div>
  )
}
export default withStyles(styles)(Footer)
