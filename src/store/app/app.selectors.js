import { createSelector } from '@reduxjs/toolkit';

const getState = (state) => state.app;

export const isLoadingPostsSelector = createSelector(getState, (state) => state.isLoadingPosts);
export const getPostsListSelector = createSelector(getState, (state) => state.posts);
