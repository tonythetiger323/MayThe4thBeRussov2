import * as React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import Routes from '../routes'
import { createShallow } from '@material-ui/core/test-utils/index'
import { MuiThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme/theme'

let wrapper: any
let shallowMui: any

describe('App', () => {
  beforeEach(() => (wrapper = shallow(<App />)))
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })

  it('should render the Routes Component', () => {
    expect(wrapper.containsMatchingElement(<Routes />)).toEqual(true)
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('<CssBaseline />', () => {
  beforeAll(() => {
    shallowMui = createShallow()
  })

  it('should work', () => {
    wrapper = shallowMui(<CssBaseline />)
  })
})
