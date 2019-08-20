import * as React from 'react'
import { shallow } from 'enzyme'
import Index from '../Index'

describe('Index/Home Page', () => {
  const index = shallow(<Index />)

  it('should render correctly', () => {
    expect(index).toMatchSnapshot()
  })
})
