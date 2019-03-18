import * as React from 'react'
import { shallow } from 'enzyme'
import Registry from '../Registry'

describe('Registry Page', () => {
  let wrapper: any
  beforeEach(() => (wrapper = shallow(<Registry />)))

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
