import reducer from './like';

describe('reducers/user', () => {
  it('should handle LIKE_IT', () => {
    const action = {
      type: 'LIKE_IT',
      payload: {
        id: 42,
      },
    };
    const test = Object.assign({}, action.payload);
    expect(reducer({}, action)).to.deep.equal(test);
  });
});
