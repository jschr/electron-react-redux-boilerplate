import actions from './like';

describe('Actions / like', () => {
  it('should give like', () => {
    const store = mockStore({});
    const expectedActions = [
      {
        type: 'LIKE_IT',
        payload: {
          id: 'some_id',
        },
      },
    ];

    store.dispatch(actions.likeIt('some_id'));

    expect(store.getActions()).deep.equal(expectedActions);
  });
});
