import * as React from 'react'
import { shallow } from 'enzyme'
import Footer from '../../Footer'
import { createShallow } from '@material-ui/core/test-utils'
import Paper from '@material-ui/core/Paper'

let wrapper: any
let shallowMui: any
describe('Footer Component', () => {
  beforeEach(() => (wrapper = shallow(<Footer />)))

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('<Paper/>', () => {
  beforeAll(() => {
    shallowMui = createShallow()
  })

  it('should work', () => {
    wrapper = shallowMui(<Paper />)
  })
})
