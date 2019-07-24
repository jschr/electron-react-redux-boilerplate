import React from 'react';
import InfoPageView from './InfoPageView';

describe('<InfoPageView />', () => {
  it('should be renderer correctly', () => {
    const wrapper = shallow(<InfoPageView />);
    expect(wrapper).to.matchSnapshot();
  });
});
