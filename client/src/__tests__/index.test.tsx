import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../App'
import store from '../__mocks__/store';

describe('index', () => {
  // tslint:disable-next-line: prefer-const
  let wrapper: any
  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
      <Router>
        <App />
      </Router>
      </Provider>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
