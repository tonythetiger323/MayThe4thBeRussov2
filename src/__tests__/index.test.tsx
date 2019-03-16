import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../App'

describe('index', () => {
  // tslint:disable-next-line: prefer-const
  let wrapper: any
  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Router>
        <App />
      </Router>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
