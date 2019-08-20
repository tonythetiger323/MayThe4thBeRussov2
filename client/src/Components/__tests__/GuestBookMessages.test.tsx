import * as React from 'react'
import { shallow } from 'enzyme'
import GuestBookMessages from '../GuestBookMessages/'

describe('Guest Book Messages', () => {
  const guestBookMessages = shallow(<GuestBookMessages />)

  it('should render correctly', () => {
    expect(guestBookMessages).toMatchSnapshot()
  })
})
