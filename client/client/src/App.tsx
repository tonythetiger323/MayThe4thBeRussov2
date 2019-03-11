import React, { Component } from 'react'
import './App.css'
import Routes from './routes'
import { MuiThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme/theme'

class App extends Component {
  public render() {
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
}

export default App
