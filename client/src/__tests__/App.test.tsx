import * as React from 'react'
import { shallow } from 'enzyme'
import { createShallow } from '@material-ui/core/test-utils/index'
import App from '../App'
import Routes from '../routes'
import { MuiThemeProvider } from '@material-ui/core'
import theme from '../theme/theme'
import SomethingCrispy from '../__mocks__/SomethingCrispy'

let wrapper: any

describe('App', () => {
  beforeEach(() => (wrapper = shallow(<App />)))
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })

  it('should render the Routes Component', () => {
    expect(wrapper.containsMatchingElement(<Routes />)).toEqual(true)
  })
})

let shallowMui: any

describe('<MuiThemeProvider />', () => {
  beforeAll(() => {
    shallowMui = createShallow()
  })

  it('should work', () => {
    wrapper = shallowMui(
      <MuiThemeProvider theme={theme}>
        <SomethingCrispy />
      </MuiThemeProvider>
    )
  })
})
