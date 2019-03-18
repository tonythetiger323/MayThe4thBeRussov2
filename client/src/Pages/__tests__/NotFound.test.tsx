import * as React from 'react'
import { shallow } from 'enzyme'
import NotFound from '../NotFound'

describe('NotFound Page', () => {
  let wrapper: any
  beforeEach(() => (wrapper = shallow(<NotFound />)))

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
