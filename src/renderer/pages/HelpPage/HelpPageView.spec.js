import React from 'react';
import HelpPageView from './HelpPageView';

describe('<HelpPageView />', () => {
  it('should be renderer correctly', () => {
    const wrapper = shallow(<HelpPageView />);
    expect(wrapper).to.matchSnapshot();
  });
});
