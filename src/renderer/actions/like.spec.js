import actions from './like';

describe('actions/like', () => {
  it('should give like', () => {
    const store = mockStore({});
    const expectedActions = [
      {
        type: 'LIKE_IT',
        payload: {
          id: 42,
        },
      },
    ];

    store.dispatch(
      actions.likeIt({
        id: 42,
      }),
    );

    expect(store.getActions()).deep.equal(expectedActions);
  });
});
