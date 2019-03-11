import * as React from 'react'
import { shallow } from 'enzyme'
import Page from '../Page'

describe('Page Layout Component', () => {
  let wrapper: any
  beforeEach(() => (wrapper = shallow(<Page />)))

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
