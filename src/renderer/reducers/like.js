import { handleActions } from 'redux-actions';
import actions from 'Actions/like';

export default handleActions(
  {
    [actions.likeIt]: (state, action) => {
      const { id } = action.payload;
      const likes = state[id] ? state[id] + 1 : 1;
      return { [id]: likes };
    },
  },
  {},
);
