import * as React from 'react'
import { shallow } from 'enzyme'
import NavbarLinkMenu from '../../NavbarLinkMenu'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { createShallow } from '@material-ui/core/test-utils'
import SomethingCrispy from '../../../__mocks__/SomethingCrispy'

let wrapper: any
let shallowMui: any

describe('NavbarLinkMenu Component', () => {
  beforeEach(() => (wrapper = shallow(<NavbarLinkMenu />)))

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('<Button/>', () => {
  beforeEach(() => {
    shallowMui = createShallow()
  })

  it('should work', () => {
    wrapper = shallowMui(
      <Button>
        <SomethingCrispy />
      </Button>
    )
  })
})

describe('<Menu/>', () => {
  beforeEach(() => {
    shallowMui = createShallow()
  })

  it('should work', () => {
    wrapper = shallowMui(
      <Menu open>
        <SomethingCrispy />
      </Menu>
    )
  })

  describe('<MenuItem/>', () => {
    beforeEach(() => {
      shallowMui = createShallow()
    })

    it('should work', () => {
      wrapper = shallowMui(<MenuItem />)
    })
  })
})
