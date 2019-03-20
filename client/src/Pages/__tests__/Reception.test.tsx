import * as React from 'react'
import { shallow } from 'enzyme'
import Reception from '../Reception'

describe('Reception Page', () => {
  let wrapper: any
  beforeEach(() => (wrapper = shallow(<Reception />)))

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
