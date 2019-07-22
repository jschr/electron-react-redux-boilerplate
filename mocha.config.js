import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

before(() => {
  configure({ adapter: new Adapter() });
});
