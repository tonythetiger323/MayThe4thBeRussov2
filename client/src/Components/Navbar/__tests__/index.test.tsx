import * as React from 'react'
import { shallow } from 'enzyme'
import Navbar from '../../Navbar'
import { createShallow } from '@material-ui/core/test-utils'
import Grid from '@material-ui/core/Grid'

let wrapper: any
let shallowMui: any

describe('Navbar Component', () => {
  beforeEach(() => (wrapper = shallow(<Navbar />)))

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('<Grid/>', () => {
  beforeEach(() => {
    shallowMui = createShallow()
  })

  it('shoule work', () => {
    wrapper = shallowMui(<Grid />)
  })
})
