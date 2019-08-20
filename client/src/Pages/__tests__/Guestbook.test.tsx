import * as React from 'react'
import { shallow } from 'enzyme'
import GuestBook from '../GuestBook'

describe('Guest Book Page', () => {
  const guestBook = shallow(<GuestBook />)

  it('should render correctly', () => {
    expect(guestBook).toMatchSnapshot()
  })
})
