import * as React from 'react'
import { shallow } from 'enzyme'
import Footer from '../../Footer'

describe('Footer Component', () => {
  let wrapper: any;
  beforeEach(() => (wrapper = shallow(<Footer />)));

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
