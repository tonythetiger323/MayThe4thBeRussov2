import * as React from 'react'
import { shallow } from 'enzyme'
import AppliedRoute from '../AppliedRoute'

describe('AppliedRoute Component', () => {
  const appliedRoute = shallow(<AppliedRoute />)
  it('should render correctly', () => {
    expect(appliedRoute).toMatchSnapshot()
  })
})
