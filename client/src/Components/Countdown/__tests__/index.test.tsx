import * as React from 'react'
import { shallow } from 'enzyme'
import Countdown from '../../Countdown'

describe('Countdown Component', () => {
  let wrapper: any;
  beforeEach(
    () => (wrapper = shallow(<Countdown date={'May 4, 2019 19:00:00'} />)),
  );

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
