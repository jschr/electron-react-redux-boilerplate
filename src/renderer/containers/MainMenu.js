import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import MainMenu from '../components/MainMenu';


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