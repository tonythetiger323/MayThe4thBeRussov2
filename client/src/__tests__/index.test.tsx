import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../App'
import { SnackbarProvider } from 'notistack'


describe('index', () => {
  // tslint:disable-next-line: prefer-const
  let wrapper: any
  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <SnackbarProvider>
      <Router>
        <App />
      </Router>
      </SnackbarProvider>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
