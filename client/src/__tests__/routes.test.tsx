import * as React from 'react'
import AppliedRoute from '../Components/AppliedRoute'
import PageLayout from '../Layouts/PageLayout'
import Index from '../Pages/Index'
import GuestBook from '../Pages/GuestBook'
import NotFound from '../Pages/NotFound'
import Rsvp from '../Pages/Rsvp'
import { createShallow } from '@material-ui/core/test-utils/index'

let wrapper: any
let shallowMui: any

describe('routes', () => {
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('<AppliedRoute/>', () => {
  beforeEach(() => {
    shallowMui = createShallow()
  })

  it('should work', () => {
    wrapper = shallowMui(<AppliedRoute />)
  })
})

describe('<PageLayout/>', () => {
  beforeEach(() => {
    shallowMui = createShallow()
  })

  it('should work', () => {
    wrapper = shallowMui(<PageLayout />)
  })
})


describe('<Index/>', () => {
  beforeEach(() => {
    shallowMui = createShallow()
  })

  it('should work', () => {
      wrapper = shallowMui(<Index />)
  })
})

describe('<GuestBook/>', () => {
  beforeEach(() => {
    shallowMui = createShallow()
  })    

  it('should work', () => {
    wrapper = shallowMui(<GuestBook />)
  })
})

describe('<NotFound/>', () => {
  beforeEach(() => {
    shallowMui = createShallow()
  })

  it('should work', () => {
    wrapper = shallowMui(<NotFound />)
  })
})

describe('<Rsvp/>', () => {
  beforeEach(() => {
    shallowMui = createShallow()
  })

  it('should work', () => {
    wrapper = shallowMui(<Rsvp />)
    })
})

