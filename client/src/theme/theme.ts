import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#23d8d0', contrastText: '#fdfdfd' },
    secondary: { main: '#e49d94', contrastText: '#fdfdfd' }
  },
  typography: {
    fontFamily: ['Oxygen', 'Oswald'].join(',')
  }
})

export default theme
