import * as React from 'react'
import { shallow } from 'enzyme'
import NavbarLink from '../../NavbarLink'

describe('NavbarLink Component', () => {
  let wrapper: any
  beforeEach(
    () => (wrapper = shallow(<NavbarLink to={'/'} children={'props'} />))
  )

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
