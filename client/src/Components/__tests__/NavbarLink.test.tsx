import * as React from 'react'
import { shallow } from 'enzyme'
import NavbarLink from '../NavbarLink'

describe('NavbarLink Component', () => {
  const props = { to: '/', children: 'props' }
  const navBarLink = shallow(<NavbarLink {...props} />)

  it('should render correctly', () => {
    expect(navBarLink).toMatchSnapshot()
  })
})
