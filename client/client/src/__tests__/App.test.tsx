import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import App from '../App'

describe('App', () => {
  let wrapper: any;
  beforeEach(
    () =>
      (wrapper = shallow(
        <App/>
        )),
  );

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <App/>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});