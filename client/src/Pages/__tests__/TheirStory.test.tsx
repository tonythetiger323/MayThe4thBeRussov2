import * as React from 'react'
import { shallow } from 'enzyme'
import TheirStory from '../TheirStory'

describe('TheirStory Page', () => {
  let wrapper: any
  beforeEach(() => (wrapper = shallow(<TheirStory />)))

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
