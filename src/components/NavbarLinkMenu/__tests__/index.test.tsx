import * as React from 'react';
import { shallow } from 'enzyme';
import NavbarLinkMenu from '../../NavbarLinkMenu';

describe('Navbar Component', () => {
    let wrapper: any;
    beforeEach(() => (wrapper = shallow(<NavbarLinkMenu />)));

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
      });
});