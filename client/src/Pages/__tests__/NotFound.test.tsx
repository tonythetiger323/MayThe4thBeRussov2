import * as React from 'react'
import { shallow } from 'enzyme'
import NotFound from '../NotFound'

describe('NotFound Page', () => {
  const notFound = shallow(<NotFound />)

  it('should render correctly', () => {
    expect(notFound).toMatchSnapshot()
  })
})
