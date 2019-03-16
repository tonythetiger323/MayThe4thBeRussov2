import * as React from 'react'
import AppliedRoute from '../Components/AppliedRoute'
import PageLayout from '../Layouts/PageLayout'
import Index from '../Pages/Index'
import UnderConstruction from '../Pages/UnderConstruction'
import NotFound from '../Pages/NotFound'
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
    beforeAll(() => {
      shallowMui = createShallow()
    })

    it('should work', () => {
      wrapper = shallowMui(<AppliedRoute />)
    })
  })
})

describe('<PageLayout/>', () => {
  beforeEach(() => {
    beforeAll(() => {
      shallowMui = createShallow()
    })

    it('should work', () => {
      wrapper = shallowMui(<PageLayout />)
    })
  })
})

describe('<Index/>', () => {
  beforeEach(() => {
    beforeAll(() => {
      shallowMui = createShallow()
    })

    it('should work', () => {
      wrapper = shallowMui(<Index />)
    })
  })

  describe('<UnderConstruction/>', () => {
    beforeEach(() => {
      beforeAll(() => {
        shallowMui = createShallow()
      })

      it('should work', () => {
        wrapper = shallowMui(<UnderConstruction />)
      })
    })
  })

  describe('<NotFound/>', () => {
    beforeEach(() => {
      beforeAll(() => {
        shallowMui = createShallow()
      })

      it('should work', () => {
        wrapper = shallowMui(<NotFound />)
      })
    })
  })
})
