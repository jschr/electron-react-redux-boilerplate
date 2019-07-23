import { configure, shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

before(() => {
  configure({ adapter: new Adapter() });
  global.shallow = shallow;
  global.mount = mount;
  global.render = render;
  global.expect = expect;
});
