import * as React from 'react'
import { shallow } from 'enzyme'
import GuestBook from '../GuestBook'

describe('Guest Book Page', () => {
  let wrapper: any
  beforeEach(() => (wrapper = shallow(<GuestBook />)))

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
