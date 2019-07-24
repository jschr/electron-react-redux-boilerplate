import { configure, shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

before(() => {
  configure({ adapter: new Adapter() });
  global.mockStore = configureMockStore([thunk]);
  global.shallow = shallow;
  global.mount = mount;
  global.render = render;
  global.expect = expect;
});
