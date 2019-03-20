import * as React from 'react'
import { shallow } from 'enzyme'
import AppliedRoute from '..'

describe('AppliedRoute Component', () => {
  let wrapper: any
  beforeEach(() => (wrapper = shallow(<AppliedRoute />)));
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
