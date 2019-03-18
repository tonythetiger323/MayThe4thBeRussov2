import * as React from 'react'
import { shallow } from 'enzyme'
import Guestbook from '../Guestbook'

describe('Guestbook Page', () => {
  let wrapper: any
  beforeEach(() => (wrapper = shallow(<Guestbook />)))

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
