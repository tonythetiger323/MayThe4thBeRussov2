import React from 'react'
import './App.css'
import Routes from './routes'
import { MuiThemeProvider } from '@material-ui/core'
import theme from './theme/theme'
import CssBaseline from '@material-ui/core/CssBaseline'

const App = () => {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <Routes />
        </CssBaseline>
      </MuiThemeProvider>
    </div>
  )
}

export default App
