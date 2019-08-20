import * as React from 'react'
import { shallow } from 'enzyme'
import CeremonyCard from '../CeremonyCard'

describe('CeremonyCard Component', () => {
  const ceremonyCard = shallow(<CeremonyCard />)
  it('should render correctly', () => {
    expect(ceremonyCard).toMatchSnapshot()
  })
})
