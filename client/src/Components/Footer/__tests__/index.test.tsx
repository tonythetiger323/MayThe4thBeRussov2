import * as React from 'react'
import { mount } from 'enzyme'
import Footer from '../../Footer'
import { createShallow } from '@material-ui/core/test-utils'
import Paper from '@material-ui/core/Paper'

let wrapper: any
let shallowMui: any
describe('Footer Component', () => {
  const props = { isAuthenticated: false, logoutUser: '', user: 'test' }
  beforeEach(() => (wrapper = mount(<Footer {...props} />)))

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('<Paper/>', () => {
  beforeAll(() => {
    shallowMui = createShallow()
  })

  it('should work', () => {
    wrapper = shallowMui(<Paper />)
  })
})
