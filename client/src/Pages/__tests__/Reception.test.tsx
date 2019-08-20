import * as React from 'react'
import { shallow } from 'enzyme'
import Reception from '../Reception'

describe('Reception Page', () => {
  const reception = shallow(<Reception />)

  it('should render correctly', () => {
    expect(reception).toMatchSnapshot()
  })
})
