import * as React from 'react'
import { shallow } from 'enzyme'
import NavbarLink from '../../NavbarLink'
import { createShallow } from '@material-ui/core/test-utils'
import Button from '@material-ui/core/Button'

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
