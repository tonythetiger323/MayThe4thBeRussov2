import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { shallow } from 'enzyme'
import App from '../App'

describe('App', () => {
  let wrapper: any
  beforeEach(
    () =>
      (wrapper = shallow(
        <Router>
          <App />
        </Router>
      ))
  )

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
