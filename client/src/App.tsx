import React, { Component } from 'react'
import './App.css'
import Routes from './routes'
import { MuiThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme/theme'
import { withAuth } from "@okta/okta-react";
import { useAuth } from "./auth";

const App = withAuth(({ auth })) => {
  const [authenticated, user] = useAuth(auth);
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
