import * as React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import Routes from '../routes'
import { createShallow } from '@material-ui/core/test-utils/index'
import CssBaseline from '@material-ui/core/CssBaseline'

describe('App', () => {
  let app = shallow(<App />)

  it('should render a <div />', () => {
    expect(app.find('div').length).toEqual(1)
  })

  it('should render the Routes Component', () => {
    expect(app.containsMatchingElement(<Routes />)).toEqual(true)
  })

  it('should render correctly', () => {
    expect(app).toMatchSnapshot()
  })

  describe('CssBaseline', () => {
    const shallowMui = createShallow()

    it('should work', () => {
      app = shallowMui(<CssBaseline />)
    })
  })
})
