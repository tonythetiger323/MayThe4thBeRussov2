import * as React from 'react'
import { shallow } from 'enzyme'
import UnderConstruction from '../UnderConstruction'

describe('UnderConstruction Page', () => {
  let wrapper: any
  beforeEach(() => (wrapper = shallow(<UnderConstruction />)))

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
