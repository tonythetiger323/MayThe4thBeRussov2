import * as React from 'react'
import { shallow } from 'enzyme'
import LoginDialog from '../../LoginDialog'

describe('LoginDialog Component', () => {
  let wrapper: any;
  beforeEach(() => (wrapper = shallow(<LoginDialog userHasAuthenticated />)));

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
