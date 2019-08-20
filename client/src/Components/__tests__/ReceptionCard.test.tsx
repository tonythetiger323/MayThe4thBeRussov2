import * as React from 'react'
import { shallow } from 'enzyme'
import ReceptionCard from '../ReceptionCard'

describe('ReceptionCard Component', () => {
  const receptionCard = shallow(<ReceptionCard />)

  it('should render correctly', () => {
    expect(receptionCard).toMatchSnapshot()
  })
})
