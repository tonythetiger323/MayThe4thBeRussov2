import * as React from 'react'
import { shallow } from 'enzyme'
import RegisterDialog from '../../RegisterDialog'

describe('RegisterDialog Component', () => {
  let wrapper: any;
  beforeEach(
    () => (wrapper = shallow(<RegisterDialog/>)),
  );

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
