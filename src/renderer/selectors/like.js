import { createSelector } from 'reselect';

export const getRealNumberOfLikes = (state, id) => state.like[id] || 0;

export const getNumberOfLikes = createSelector(
  getRealNumberOfLikes,
  (realLikes) => realLikes * 1000,
);
