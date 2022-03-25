import { apiClient } from './apiClient';

export const getPostsList = () => {
  return apiClient.get('/posts');
};

export const createNewPost = (payload) => {
  return apiClient.post('/posts', payload);
};

export const deleteSelectedPost = (id) => {
  return apiClient._delete(`/posts/${id}`);
};
