import * as React from 'react'
import { shallow } from 'enzyme'
import Footer from '../Footer'
import store from '../../redux/store/index'

describe('Footer Component', () => {
  const props = { store, isAuthenticated: false, logoutUser: '', user: 'test' }
  const footer = shallow(<Footer {...props} />)

  it('should render correctly', () => {
    expect(footer).toMatchSnapshot()
  })
})
