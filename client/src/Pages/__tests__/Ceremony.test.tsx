import * as React from 'react'
import { shallow } from 'enzyme'
import Ceremony from '../Ceremony'

describe('Ceremony Page', () => {
  let wrapper: any
  beforeEach(() => (wrapper = shallow(<Ceremony />)))

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
