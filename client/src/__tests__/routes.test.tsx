import * as React from 'react'
import Routes from '../routes'
import { shallow } from 'enzyme'
import AppliedRoute from '../Components/AppliedRoute'
import PageLayout from '../Layouts/PageLayout'
import Index from '../Pages/Index'
import GuestBook from '../Pages/GuestBook'
import NotFound from '../Pages/NotFound'
import Rsvp from '../Pages/Rsvp'
import { createShallow } from '@material-ui/core/test-utils/index'

describe('routes', () => {
  let routes = shallow(<Routes />)
  const shallowMui = createShallow()

  it('should render correctly', () => {
    expect(routes).toMatchSnapshot()
  })

  describe('AppliedRoute', () => {
    it('should work', () => {
      routes = shallowMui(<AppliedRoute />)
    })
  })

  describe('PageLayout', () => {
    it('should work', () => {
      routes = shallowMui(<PageLayout />)
    })
  })

  describe('Index', () => {
    it('should work', () => {
      routes = shallowMui(<Index />)
    })
  })

  describe('GuestBook', () => {
    it('should work', () => {
      routes = shallowMui(<GuestBook />)
    })
  })

  describe('NotFound', () => {
    it('should work', () => {
      routes = shallowMui(<NotFound />)
    })
  })

  describe('Rsvp', () => {
    it('should work', () => {
      routes = shallowMui(<Rsvp />)
    })
  })
})
