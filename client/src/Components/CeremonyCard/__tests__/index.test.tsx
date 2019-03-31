import * as React from 'react'
import { shallow } from 'enzyme'
import CeremonyCard from '../../CeremonyCard'

describe('CeremonyCard Component', () => {
  let wrapper: any;
  beforeEach(() => (wrapper = shallow(<CeremonyCard />)));

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

