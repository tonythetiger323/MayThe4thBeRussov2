import * as React from 'react'
import Page from '../Layouts/Page'
import Typography from '@material-ui/core/Typography'

class Index extends React.Component {
  render() {
    return (
      <div>
        <Page>
          <Typography variant='h2'>May the 4th be Russo</Typography>
        </Page>
      </div>
    )
  }
}

export default Index
