import * as React from 'react'
import { shallow } from 'enzyme'
import NavbarLink from '../../NavbarLink'

let wrapper: any

describe('NavbarLink Component', () => {
  beforeEach(
    () => (wrapper = shallow(<NavbarLink to={'/'} children={'props'} />))
  )

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
