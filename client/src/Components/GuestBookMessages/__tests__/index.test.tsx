import * as React from 'react'
import { shallow } from 'enzyme'
import GuestBookMessages from '../index'

describe('Guest Book Messages', () => {
  let wrapper: any
  beforeEach(() => (wrapper = shallow(<GuestBookMessages />)))

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})