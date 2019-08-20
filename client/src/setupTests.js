import requestAnimationFrame from './tempPolyfills'
import { configure, shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter(), disableLifecycleMethods: true })

global.shallow = shallow
global.render = render
global.mount = mount
