import React from 'react';
import MainMenuView from './MainMenuView';

describe('<MainMenuView />', () => {
  it('should be renderer correctly', () => {
    const wrapper = shallow(<MainMenuView />);
    expect(wrapper).to.matchSnapshot();
  });
});
