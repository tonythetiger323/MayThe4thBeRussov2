import * as React from 'react'
import { shallow } from 'enzyme'
import Registry from '../Registry'

describe('Registry Page', () => {
  const registry = shallow(<Registry />)

  it('should render correctly', () => {
    expect(registry).toMatchSnapshot()
  })
})
