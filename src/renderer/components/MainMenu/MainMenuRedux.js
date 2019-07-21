import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import MainMenu from './MainMenuView';


const mapDispatchToProps = (dispatch) => {
  return {
    goToPage: (page) => {
      dispatch(push(page));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(MainMenu);