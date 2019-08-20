import * as React from 'react'
import { shallow } from 'enzyme'
import TheirStory from '../TheirStory'

describe('TheirStory Page', () => {
  const theirStory = shallow(<TheirStory />)

  it('should render correctly', () => {
    expect(theirStory).toMatchSnapshot()
  })
})
