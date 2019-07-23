import React from 'react';
import PageBaseView from './PageBaseView';

describe('<PageBaseView />', () => {
  it('should be renderer correctly', () => {
    const wrapper = shallow(<PageBaseView />);
    expect(wrapper).to.matchSnapshot();
  });
});
