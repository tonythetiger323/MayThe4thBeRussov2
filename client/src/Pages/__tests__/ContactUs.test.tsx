import * as React from 'react'
import { shallow } from 'enzyme'
import ContactUs from '../ContactUs'

describe('ContactUs Page', () => {
  let wrapper: any
  beforeEach(() => (wrapper = shallow(<ContactUs />)))

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
