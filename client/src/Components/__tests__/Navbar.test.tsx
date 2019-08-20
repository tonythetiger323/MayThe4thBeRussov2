import * as React from 'react'
import { shallow } from 'enzyme'
import Navbar from '../Navbar'

describe('Navbar Component', () => {
  const navBar = shallow(<Navbar />)

  it('should render correctly', () => {
    expect(navBar).toMatchSnapshot()
  })
})
