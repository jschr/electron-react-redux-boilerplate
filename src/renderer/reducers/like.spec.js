import reducer from './like';

describe('reducers/user', () => {
  it('should handle LIKE_IT', () => {
    const action = {
      type: 'LIKE_IT',
      payload: {
        id: 42,
      },
    };
    const test = { [action.payload.id]: 1 };
    expect(reducer({}, action)).to.deep.equal(test);
  });
});
