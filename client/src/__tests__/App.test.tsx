import * as React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import Routes from '../routes'

let wrapper: any

describe('App', () => {
  beforeEach(() => (wrapper = shallow(<App />)))
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })

  it('should render the Routes Component', () => {
    expect(wrapper.containsMatchingElement(<Routes />)).toEqual(true)
  })
})
