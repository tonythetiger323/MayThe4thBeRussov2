import * as React from 'react'
import { shallow } from 'enzyme'
import HerStory from '../HerStory'

describe('HerStory Page', () => {
  let wrapper: any
  beforeEach(() => (wrapper = shallow(<HerStory />)))

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
