import { handleActions } from 'redux-actions';

export default handleActions({
  USER_LOGIN: (state, action) => {
    console.log(state, action);
    return { ...state, ...action.payload };
  }
}, {});
