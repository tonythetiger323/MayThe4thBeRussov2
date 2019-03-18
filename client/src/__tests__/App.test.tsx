import * as React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

let wrapper: any

describe('App', () => {
  beforeEach(() => (wrapper = shallow(<App />)))
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })
})
