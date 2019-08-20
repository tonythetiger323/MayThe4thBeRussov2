import * as React from 'react'
import { shallow } from 'enzyme'
import Footer from '../../Footer'
import { createShallow } from '@material-ui/core/test-utils'
import Paper from '@material-ui/core/Paper'
import store from '../../../redux/store/index'

let wrapper: any
let shallowMui: any
describe('Footer Component', () => {
  const props = { store, isAuthenticated: false, logoutUser: '', user: 'test' }
  beforeEach(() => (wrapper = shallow(<Footer {...props} />)))

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
