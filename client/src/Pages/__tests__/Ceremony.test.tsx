import * as React from 'react'
import { shallow } from 'enzyme'
import Ceremony from '../Ceremony'

describe('Ceremony Page', () => {
  const ceremony = shallow(<Ceremony />)

  it('should render correctly', () => {
    expect(ceremony).toMatchSnapshot()
  })
})
