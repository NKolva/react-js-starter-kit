import { createSlice } from '@reduxjs/toolkit';

import { fetchPostsList, createPost } from './app.actions';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    posts: [],

    isLoadingPosts: false,
  },
  reducers: {
    setPost: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers: {
    [fetchPostsList.pending]: (state) => {
      state.isLoadingPosts = true;
    },
    [fetchPostsList.fulfilled]: (state, action) => {
      state.isLoadingPosts = false;
      state.posts = action.payload;
    },
    [fetchPostsList.rejected]: (state) => {
      state.isLoadingPosts = false;
    },

    [createPost.pending]: (state) => {
      state.isLoadingPosts = true;
    },
    [createPost.fulfilled]: (state) => {
      state.isLoadingPosts = false;
    },
    [createPost.rejected]: (state) => {
      state.isLoadingPosts = false;
    },
  },
});

export const { setPost } = appSlice.actions;

export default appSlice.reducer;
