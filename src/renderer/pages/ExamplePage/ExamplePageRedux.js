import { connect } from 'react-redux';
import ExamplePageView from './ExamplePageView';
import likeActions from 'Actions/like';
import { getNumberOfLikes } from 'Selectors/like';

const mapStateToProps = (state) => ({
  likes: getNumberOfLikes(state, 'this_application'),
});

const mapDispatchToProps = (dispatch) => ({
  likeIt: () => dispatch(likeActions.likeIt('this_application')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExamplePageView);
