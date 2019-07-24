import { handleActions } from 'redux-actions';
import actions from 'Actions/like';

export default handleActions(
  {
    [actions.likeIt]: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
  {},
);
