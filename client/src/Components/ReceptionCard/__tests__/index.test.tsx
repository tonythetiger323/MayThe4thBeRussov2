import * as React from 'react'
import { shallow } from 'enzyme'
import ReceptionCard from '..'

describe('ReceptionCard Component', () => {
  let wrapper: any
  beforeEach(() => (wrapper = shallow(<ReceptionCard />)))

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})