import * as React from 'react'
import { shallow } from 'enzyme'
import NavbarLinkMenu from '../../NavbarLinkMenu'
import MenuItem from '@material-ui/core/MenuItem'
import { createShallow } from '@material-ui/core/test-utils'

let wrapper: any
let shallowMui: any

describe('NavbarLinkMenu Component', () => {
  beforeEach(() => (wrapper = shallow(<NavbarLinkMenu />)))

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('<MenuItem/>', () => {
  beforeEach(() => {
    shallowMui = createShallow()
  })

  it('should work', () => {
    wrapper = shallowMui(<MenuItem />)
  })
})

