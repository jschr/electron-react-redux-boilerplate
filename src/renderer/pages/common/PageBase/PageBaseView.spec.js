import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import PageBaseView from './PageBaseView';

describe('<PageBaseView />', () => {
  it('should be renderer correctly', () => {
    const wrapper = shallow(<PageBaseView />);
    expect(!!wrapper).to.be.true;
  });
});
