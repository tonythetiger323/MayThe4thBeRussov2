import * as React from 'react'
import { shallow } from 'enzyme'
import Index from '../Index'

describe('Index/Home Page', () => {
  let wrapper: any
  beforeEach(() => (wrapper = shallow(<Index />)))

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
