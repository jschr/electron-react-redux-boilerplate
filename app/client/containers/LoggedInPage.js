import { connect } from 'react-redux';
import LoggedIn from '../components/LoggedIn';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);
