import * as React from 'react'
import { shallow } from 'enzyme'
import NavbarLink from '../../NavbarLink'
import { createShallow } from '@material-ui/core/test-utils'

let wrapper: any
let shallowMui: any

describe('NavbarLink Component', () => {
  beforeEach(
    () => (wrapper = shallow(<NavbarLink to={'/'} children={'props'} />))
  )

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('<Button/>', () => {
  beforeEach(() => {
    shallowMui = createShallow()
  })

  it('should work', () => {
    wrapper = shallowMui(<Button />)
  })
})
