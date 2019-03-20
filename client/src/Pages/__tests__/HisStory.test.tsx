import * as React from 'react'
import { shallow } from 'enzyme'
import HisStory from '../HisStory'

describe('HisStory Page', () => {
  let wrapper: any
  beforeEach(() => (wrapper = shallow(<HisStory />)))

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
