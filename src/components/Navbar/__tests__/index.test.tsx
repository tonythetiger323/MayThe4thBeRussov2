import * as React from 'react'
import { shallow } from 'enzyme'
import Navbar from '../../Navbar'

describe('Navbar Component', () => {
  let wrapper: any;
  beforeEach(() => (wrapper = shallow(<Navbar />)));

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
